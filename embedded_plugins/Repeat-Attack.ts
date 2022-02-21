//@ts-ignore
import {
  Planet,
  LocationId,
  PlanetType,
  SpaceType,
  EthAddress,
  PlanetTypeNames
  //@ts-ignore
} from "https://cdn.skypack.dev/@darkforest_eth/types";
import {
  getPlanetName
  //@ts-ignore
} from "https://cdn.skypack.dev/@darkforest_eth/procedural";
//@ts-ignore
import { isUnconfirmedMoveTx } from "https://cdn.skypack.dev/@darkforest_eth/serde";
//@ts-ignore
import {
  html,
  render,
  useEffect,
  useState,
  useLayoutEffect,
  //@ts-ignore
} from "https://unpkg.com/htm/preact/standalone.module.js";

const getPlanetString = (locationId: LocationId): string => {
  const planet = df.getPlanetWithId(locationId);
  if(planet) {  
    return `Lvl-${planet.planetLevel} Type-${PlanetTypeNames[planet.planetType].slice(0,3)}`
  }
  return `xx invalid id`;
}

const getPlanetRank = (planet: Planet | undefined): number => {
  if (!planet) return 0;
  //@ts-ignore
  return planet.upgradeState.reduce((a, b) => a + b);
};

const getPlanetMaxRank = (planet: Planet | undefined): number => {
  if (!planet) return 0;

  if (planet.spaceType === SpaceType.NEBULA) return 3;
  else if (planet.spaceType === SpaceType.SPACE) return 4;
  else return 5;
};

const isFullRank = (planet: Planet | undefined): boolean => {
  if (!planet) return true;
  const maxRank = getPlanetMaxRank(planet);
  const rank = getPlanetRank(planet);

  return rank >= maxRank;
};

function unconfirmedDepartures(planet: Planet): number {
  return (
    planet.transactions
      ?.getTransactions(isUnconfirmedMoveTx)
      //@ts-ignore
      .reduce((acc, tx) => acc + tx.intent.forces, 0) || 0
  );
}

function planetCurrentPercentEnergy(planet: Planet) {
  const departures = unconfirmedDepartures(planet);
  const estimatedEnergy = Math.floor(planet.energy - departures);
  return Math.floor((estimatedEnergy / planet.energyCap) * 100);
}
interface Attack {
  srcId: LocationId;
  targetId: LocationId;
}

// I use `let` here to sidestep any weird execution env problems
let PERCENTAGE_TRIGGER = 75;
let PERCENTAGE_SEND = 45;

class Repeater {
  public attacks: Attack[];
  intervalId: number;
  public account: EthAddress | undefined;

  constructor() {
    //@ts-ignore
    if (typeof window.__CORELOOP__ == "undefined") {
      //setup append only interval id storage
      //@ts-ignore

      window.__CORELOOP__ = [];
    } else {
      //clear out old intervald
      console.log("KILLING PREVIOUS INTERVALS");
      //@ts-ignore
      window.__CORELOOP__.forEach((id) => window.clearInterval(id));
    }

    this.attacks = [];

    this.account = df.getAccount()

    if(localStorage.getItem(`repeatAttacks-${this.account}`)) {
      // @ts-ignore
      this.attacks = JSON.parse(localStorage.getItem(`repeatAttacks-${this.account}`))
    }


    this.intervalId = window.setInterval(this.coreLoop.bind(this), 15000);
    //@ts-ignore
    window.__CORELOOP__.push(this.intervalId);
  }

  saveAttacks() {
    console.log('saving attacks', this.attacks);
    localStorage.setItem(`repeatAttacks-${this.account}`, JSON.stringify(this.attacks));
  }

  addAttack(srcId: LocationId, targetId: LocationId) {
    this.attacks.push({ srcId, targetId } as Attack);
    this.saveAttacks();
  }
  removeAttack(position: number) {
    this.attacks.splice(position, 1);
    this.saveAttacks()
  }



  coreLoop() {
    this?.attacks?.forEach((a) => {
      ExecuteAttack(a.srcId, a.targetId);
    });
  }
}

const ExecuteAttack = (srcId: LocationId, targetId: LocationId) => {
  let srcPlanet = df.getPlanetWithId(srcId);
  if (!srcPlanet) {
    // Well shit
    return;
  }
  // Needs updated check getUnconfirmedDepartingForces
  const departingForces = unconfirmedDepartures(srcPlanet);
  const TRIGGER_AMOUNT = Math.floor(
    (srcPlanet.energyCap * PERCENTAGE_TRIGGER) / 100
  );
  const FUZZY_ENERGY = Math.floor(srcPlanet.energy - departingForces); //Best estimate of how much energy is ready to send
  if (FUZZY_ENERGY > TRIGGER_AMOUNT) {
    const overflow_send =
      planetCurrentPercentEnergy(srcPlanet) -
      (PERCENTAGE_TRIGGER - PERCENTAGE_SEND);

    const FORCES = Math.floor((srcPlanet.energyCap * overflow_send) / 100);
    var silver = 0;
    // Send silver w repeat Attack
    if(
      srcPlanet.planetType == PlanetType.SILVER_MINE
      && (srcPlanet.silver/srcPlanet.silverCap*100 > 75)
      )
      silver = Math.floor(srcPlanet.silver * 75/100);
    else if(isFullRank(srcPlanet)) {
      silver = srcPlanet.silver;
    }
    else {
      silver = 0;
    }
  
    df.move(srcId, targetId, FORCES, silver);
  }
};

let Spacing = {
  marginLeft: "12px",
  marginRight: "12px",
};
let VerticalSpacing = {
  marginBottom: "12px",
};
let HalfVerticalSpacing = {
  marginBottom: "6px",
};
let Clickable = {
  cursor: "pointer",
  textDecoration: "underline",
};
let ActionEntry = {
  marginBottom: "5px",
  display: "flex",
  justifyContent: "space-between",
  color: "",
};

function centerPlanet(id: LocationId) {
  ui.centerLocationId(id);
}

function planetShort(locationId: LocationId) {
  return locationId.substring(4, 9);
}

function Attack({ attack, onDelete }: { attack: Attack; onDelete: () => {} }) {
  return html`
    <div style=${ActionEntry}>
      <span>
        <span
          style=${{ ...Spacing, ...Clickable }}
          onClick=${() => centerPlanet(attack.srcId)}
          >${getPlanetString(attack.srcId)}</span
        >
        =>
        <span
          style=${{ ...Spacing, ...Clickable }}
          onClick=${() => centerPlanet(attack.targetId)}
          >${getPlanetString(attack.targetId)}</span
        ></span
      >
      <button onClick=${onDelete}>X</button>
    </div>
  `;
}

function AddAttack({
  onCreate,
}: {
  onCreate: (source: LocationId, target: LocationId) => {};
}) {
  let [planet, setPlanet] = useState<Planet | undefined>(
    ui.getSelectedPlanet()
  );
  let [source, setSource] = useState<Planet | undefined>(undefined);
  let [target, setTarget] = useState<Planet | undefined>(undefined);
  useLayoutEffect(() => {
    let onClick = () => {
      setPlanet(ui.getSelectedPlanet());
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return html`
    <div style=${{ display: "flex" }}>
      <button style=${VerticalSpacing} onClick=${() => setSource(planet)}>
        Set Source
      </button>
      <span style=${{ ...Spacing, marginRight: "auto" }}
        >${source ? getPlanetString(source.locationId) : "?????"}</span
      >
      <button style=${VerticalSpacing} onClick=${() => setTarget(planet)}>
        Set Target
      </button>
      <span style=${{ ...Spacing, marginRight: "auto" }}
        >${target ? getPlanetString(target.locationId) : "?????"}</span
      >
      <button
        style=${VerticalSpacing}
        onClick=${() =>
          target && source && onCreate(source.locationId, target.locationId)}
      >
        start
      </button>
    </div>
  `;
}

function AttackList({ repeater }: { repeater: Repeater }) {
  const [attacks, setAttacks] = useState([...repeater.attacks]);
  useEffect(() => {
    const id = setInterval(() => {
      setAttacks([...repeater.attacks]);
    }, 1000);
    setAttacks([...repeater.attacks]);
    return () => clearInterval(id);
  }, [attacks.length]);

  let actionList = {
    maxHeight: "70px",
    overflowX: "hidden",
    overflowY: "scroll",
  };
  //@ts-ignore
  let actionsChildren = attacks.map((action, index) => {
    return html`
      <${Attack}
        attack=${action}
        onDelete=${() => {
          repeater.removeAttack(index);
        }}
      />
    `;
  });

  return html`
    <h1>Set-up a Recurring Attack</h1>
    <i style=${{ ...VerticalSpacing, display: "block" }}
      >Auto-attack when source planet >75% energy. Will send silver if silver > 75%
    </i>
    <${AddAttack}
      onCreate=${(source: LocationId, target: LocationId) =>
        repeater.addAttack(source, target)}
    />
    <h1 style=${HalfVerticalSpacing}>
      Recurring Attacks (${actionsChildren.length})
      <button
        style=${{ float: "right" }}
        onClick=${() => setAttacks([...repeater.attacks])}
      >
        refresh
      </button>
    </h1>
    <div style=${actionList}>
      ${actionsChildren.length ? actionsChildren : "No Actions."}
    </div>
  `;
}

function App({ repeater }: { repeater: Repeater }) {
  return html`<${AttackList} repeater=${repeater} />`;
}

class Plugin {
  repeater: Repeater;
  container: HTMLDivElement | undefined;
  root: void;
  stop() {
    //@ts-ignore
    window.__CORELOOP__.forEach((id) => window.clearInterval(id));
  }

// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));  

  constructor() {
    this.repeater = new Repeater();
    this.root = undefined;
    
  }

  /**
   * Called when plugin is launched with the "run" button.
   */
  async render(container: HTMLDivElement) {
    this.container = container;
    container.style.width = "500px";
    this.root = render(html`<${App} repeater=${this.repeater} />`, container);
  }

  /**
   * Called when plugin modal is closed.
   */
  destroy() {
    //@ts-ignore
    window.__CORELOOP__.forEach((id) => window.clearInterval(id));
    if (this.container) render(html`<div></div>`, this.container);
  }
}

/**
 * And don't forget to export it!
 */
export default Plugin;
