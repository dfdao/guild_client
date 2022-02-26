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

import {
  canStatUpgrade,
  canPlanetUpgrade,
  getPlanetRank,
  //@ts-ignore
} from 'https://plugins.zkga.me/utils/utils.js';

const emptyAddress = "0x0000000000000000000000000000000000000000";

const isOwned = (planet: Planet):boolean => {
  return planet.owner !== emptyAddress;
}

function getArrivalsForPlanet(planetId: LocationId) {
  return df.getAllVoyages().filter(arrival => arrival.toPlanet === planetId).filter(p => p.arrivalTime > Date.now() / 1000);
}
const hasJunk = (planet: Planet): boolean => {
  return planet.spaceJunk > 0;
}
const getPlanetString = (locationId: LocationId): string => {
  const planet = df.getPlanetWithId(locationId);
  // Type-${PlanetTypeNames[planet.planetType].slice(0,3)
  if(planet) {  
    return `${planet.planetLevel} - ${getPlanetName(planet)}`
  }
  return `xx invalid id`;
}

const getPlanetRank = (planet: Planet | undefined): number => {
  if (!planet) return 0;
  //@ts-ignore
  return planet.upgradeState.reduce((a, b) => a + b);
};


const calcSilver = (srcPlanet: Planet, destPlanet: Planet): number => {
  var silver = srcPlanet.silver;
  var silverNeeded = destPlanet.silverCap - destPlanet.silver;
  // Send silver w repeat Attack
  if(srcPlanet.planetType === PlanetType.PLANET) {
    if(canPlanetUpgrade(srcPlanet)) return 0;
  }
  // only send silver needed.
  if(silver > silverNeeded ) {
    silver = silverNeeded
  }
  return Math.floor(silver);
}

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
  srcHasJunk: boolean;
  srcNeedsJunk: boolean;
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

  addAttack(srcId: LocationId, targetId: LocationId, srcHasJunk: boolean, srcNeedsJunk: boolean) {
    this.attacks.push({ srcId, targetId, srcHasJunk, srcNeedsJunk } as Attack);
    console.log("new attack", this.attacks.slice(-1))
    this.saveAttacks();
  }
  removeAttack(position: number) {
    this.attacks.splice(position, 1);
    this.saveAttacks()
  }

  coreLoop() {
    this?.attacks?.forEach((a) => {
      ExecuteAttack(a.srcId, a.targetId, a.srcHasJunk, a.srcNeedsJunk);
    });
  }
}

const ExecuteAttack = (
  srcId: LocationId, 
  targetId: LocationId, 
  srcHasJunk: boolean | undefined, 
  srcNeedsJunk: boolean | undefined
) => {
  let srcPlanet = df.getPlanetWithId(srcId);
  let targetPlanet = df.getPlanetWithId(targetId);
  var abandoning = false;
  var moveIsTakeJunk = false;

  if (!srcPlanet || !targetPlanet) {
    // Well shit
    return;
  }

  const arrivals = getArrivalsForPlanet(targetPlanet.locationId);

  if(srcHasJunk && srcNeedsJunk) {
    console.log("can't execute attack with srcNeeds and srcHas");
    return;
  }
  else if(srcHasJunk && !srcNeedsJunk) {
    if(arrivals.length > 0) {
      console.log("planet has pending arrivals");
      return;
    }
    // Don't send a move if one is already in progress.
    // This will prevent a voyage being sent that stops other player from abandoning.

    // Alt: If targetId unowned and has junk, send 1 move.
    // Assumes junk will accumulate to planet on next move.
    if(isOwned(targetPlanet) && !hasJunk(targetPlanet)) {
      console.log(`${getPlanetName(targetPlanet)} is owned or has no junk`);
      return; // don't attack
    }
    else if (!isOwned(targetPlanet) && hasJunk(targetPlanet)) {
      console.log("making a minimal capture for junk");
      moveIsTakeJunk = true;
    } 
  }
  // Dao abandons if they own
  else if(!srcHasJunk && srcNeedsJunk) {
    if(arrivals.length > 0) {
      console.log("planet has pending arrivals");
      return;
    }
    // don't send if an arrival is en route.

    if(targetPlanet.owner == srcPlanet.owner) {
      console.log(`${getPlanetName(targetPlanet)} is owned by ${targetPlanet.owner} and will abandon`)
      // abandon from target to source
      df.move(targetId, srcId, 0, 0, undefined, true);
      return;
    }
    if(hasJunk(targetPlanet)) return; // don't move planet has junk on it
    
  }

  if(srcPlanet.planetLevel === 1 || srcPlanet.planetLevel === 0) {
    console.log(`sending L1 or L0`)
    moveIsTakeJunk = true;
  }

  if(arrivals.length > 5) {
    return;
  }


  console.log(`Repeat Attack from ${getPlanetName(srcPlanet)} to ${getPlanetName(targetPlanet)}`)
  // Needs updated check getUnconfirmedDepartingForces
  const departingForces = unconfirmedDepartures(srcPlanet);
  const TRIGGER_AMOUNT = Math.floor(
    (srcPlanet.energyCap * PERCENTAGE_TRIGGER) / 100
  );
  const FUZZY_ENERGY = Math.floor(srcPlanet.energy - departingForces); //Best estimate of how much energy is ready to send
  if(moveIsTakeJunk) {
    // If < 6 arrivals, attack
    const FORCES = targetPlanet
    const silver = calcSilver(srcPlanet, targetPlanet);
    console.log(`sending silver`, silver);

    const energyArriving = 1;
    // needs to be a whole number for the contract
    const energyNeeded = Math.ceil(df.getEnergyNeededForMove(srcPlanet.locationId, targetPlanet.locationId, energyArriving));
    console.log(`sending energy frommoveisTakeJunk ${energyNeeded}`)

    df.move(srcId, targetId, energyNeeded, silver, undefined, abandoning);
    return;
  
  }
  if (FUZZY_ENERGY > TRIGGER_AMOUNT) {
    const overflow_send =
      planetCurrentPercentEnergy(srcPlanet) -
      (PERCENTAGE_TRIGGER - PERCENTAGE_SEND);

    const FORCES = Math.floor((srcPlanet.energyCap * overflow_send) / 100);
    const silver = calcSilver(srcPlanet, targetPlanet);
    console.log(`sending silver`, silver);
  
    df.move(srcId, targetId, FORCES, silver, undefined, abandoning);
  }


};

let Spacing = {
  marginLeft: "12px",
  marginRight: "12px",
};
let VerticalSpacing = {
  marginBottom: "12px",
  marginLeft: "12px",
  marginRight: "12px",
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
          >${getPlanetString(attack.srcId)} 
        </span>
        =>
        <span
          style=${{ ...Spacing, ...Clickable }}
          onClick=${() => centerPlanet(attack.targetId)}
          >${getPlanetString(attack.targetId)}</span
        >
        =>
      </span>
      <button onClick=${onDelete}>X</button>
    </div>
  `;
}

function AddAttack({
  onCreate,
}: {
  onCreate: (
    source: LocationId, 
    target: LocationId, 
    srcHasJunk: boolean, 
    srcNeedsJunk: boolean
  ) => {};
}) {
  let [planet, setPlanet] = useState<Planet | undefined>(
    ui.getSelectedPlanet()
  );
  let [source, setSource] = useState<Planet | undefined>(undefined);
  let [target, setTarget] = useState<Planet | undefined>(undefined);
  let [srcHasJunk, setsrcHasJunk] = useState<boolean>(false);
  let [srcNeedsJunk, setsrcNeedsJunk] = useState<boolean>(false);

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
      <button style=${VerticalSpacing} onClick=${() => setsrcHasJunk(!srcHasJunk)}>
        Src Has Junk
      </button>
      <span style=${{ ...Spacing, marginRight: "auto" }}
        >${srcHasJunk ? 'Y' : 'N'}</span
      >
      <button style=${VerticalSpacing} onClick=${() => setsrcNeedsJunk(!srcNeedsJunk)}>
        Src Needs Junk
      </button>
      <span style=${{ ...Spacing, marginRight: "auto" }}
        >${srcNeedsJunk ? 'Y' : 'N'}</span
      >
      <button
        style=${VerticalSpacing}
        onClick=${() =>
          target && source && onCreate(
            source.locationId, 
            target.locationId, 
            srcHasJunk,
            srcNeedsJunk)}
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
    maxHeight: "150px",
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
      >Auto-attack when source planet >75% energy. Will send all silver target can hold unless planet can upgrade
    </i>
    <${AddAttack}
      onCreate=${(
        source: LocationId, 
        target: LocationId, 
        srcHasJunk: boolean, 
        srcNeedsJunk: boolean
        ) => 
        {
          if(srcHasJunk && srcNeedsJunk) {
            console.log("Cannot select Has and Needs");
            return;
          }
          repeater.addAttack(source, target, srcHasJunk, srcNeedsJunk)

        }
      }
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

  constructor() {
    this.repeater = new Repeater();
    this.root = undefined;
    
  }

  /**
   * Called when plugin is launched with the "run" button.
   */
  async render(container: HTMLDivElement) {
    this.container = container;
    container.style.width = "600px";
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
