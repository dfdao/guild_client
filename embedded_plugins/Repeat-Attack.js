(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // plugins/Repeat-Attack.ts
  var import_types = __require("https://cdn.skypack.dev/@darkforest_eth/types");
  var import_procedural = __require("https://cdn.skypack.dev/@darkforest_eth/procedural");
  var import_serde = __require("https://cdn.skypack.dev/@darkforest_eth/serde");
  var import_standalone_module = __require("https://unpkg.com/htm/preact/standalone.module.js");
  var import_utils = __require("https://plugins.zkga.me/utils/utils.js");
  var emptyAddress = "0x0000000000000000000000000000000000000000";
  var isOwned = (planet) => {
    return planet.owner !== emptyAddress;
  };
  function getArrivalsForPlanet(planetId) {
    return df.getAllVoyages().filter((arrival) => arrival.toPlanet === planetId).filter((p) => p.arrivalTime > Date.now() / 1e3);
  }
  var hasJunk = (planet) => {
    return planet.spaceJunk > 0;
  };
  var getPlanetString = (locationId) => {
    const planet = df.getPlanetWithId(locationId);
    if (planet) {
      return `${planet.planetLevel} - ${(0, import_procedural.getPlanetName)(planet)}`;
    }
    return `xx invalid id`;
  };
  var calcSilver = (srcPlanet, destPlanet) => {
    var silver = srcPlanet.silver;
    var silverNeeded = destPlanet.silverCap - destPlanet.silver;
    if (srcPlanet.planetType === import_types.PlanetType.PLANET) {
      if ((0, import_utils.canPlanetUpgrade)(srcPlanet))
        return 0;
    }
    if (silver > silverNeeded) {
      silver = silverNeeded;
    }
    return Math.floor(silver);
  };
  function unconfirmedDepartures(planet) {
    return planet.transactions?.getTransactions(import_serde.isUnconfirmedMoveTx).reduce((acc, tx) => acc + tx.intent.forces, 0) || 0;
  }
  function planetCurrentPercentEnergy(planet) {
    const departures = unconfirmedDepartures(planet);
    const estimatedEnergy = Math.floor(planet.energy - departures);
    return Math.floor(estimatedEnergy / planet.energyCap * 100);
  }
  var PERCENTAGE_TRIGGER = 75;
  var PERCENTAGE_SEND = 45;
  var Repeater = class {
    constructor() {
      if (typeof window.__CORELOOP__ == "undefined") {
        window.__CORELOOP__ = [];
      } else {
        console.log("KILLING PREVIOUS INTERVALS");
        window.__CORELOOP__.forEach((id) => window.clearInterval(id));
      }
      this.attacks = [];
      this.account = df.getAccount();
      if (localStorage.getItem(`repeatAttacks-${this.account}`)) {
        this.attacks = JSON.parse(localStorage.getItem(`repeatAttacks-${this.account}`));
      }
      this.intervalId = window.setInterval(this.coreLoop.bind(this), 15e3);
      window.__CORELOOP__.push(this.intervalId);
    }
    saveAttacks() {
      console.log("saving attacks", this.attacks);
      localStorage.setItem(`repeatAttacks-${this.account}`, JSON.stringify(this.attacks));
    }
    addAttack(srcId, targetId, srcHasJunk, srcNeedsJunk) {
      this.attacks.push({ srcId, targetId, srcHasJunk, srcNeedsJunk });
      console.log("new attack", this.attacks.slice(-1));
      this.saveAttacks();
    }
    removeAttack(position) {
      this.attacks.splice(position, 1);
      this.saveAttacks();
    }
    coreLoop() {
      this?.attacks?.forEach((a) => {
        ExecuteAttack(a.srcId, a.targetId, a.srcHasJunk, a.srcNeedsJunk);
      });
    }
  };
  var ExecuteAttack = (srcId, targetId, srcHasJunk, srcNeedsJunk) => {
    let srcPlanet = df.getPlanetWithId(srcId);
    let targetPlanet = df.getPlanetWithId(targetId);
    var abandoning = false;
    var moveIsTakeJunk = false;
    if (!srcPlanet || !targetPlanet) {
      return;
    }
    const arrivals = getArrivalsForPlanet(targetPlanet.locationId);
    if (srcHasJunk && srcNeedsJunk) {
      console.log("can't execute attack with srcNeeds and srcHas");
      return;
    } else if (srcHasJunk && !srcNeedsJunk) {
      if (arrivals.length > 0) {
        console.log("planet has pending arrivals");
        return;
      }
      if (isOwned(targetPlanet) && !hasJunk(targetPlanet)) {
        console.log(`${(0, import_procedural.getPlanetName)(targetPlanet)} is owned or has no junk`);
        return;
      } else if (!isOwned(targetPlanet) && hasJunk(targetPlanet)) {
        console.log("making a minimal capture for junk");
        moveIsTakeJunk = true;
      }
    } else if (!srcHasJunk && srcNeedsJunk) {
      if (arrivals.length > 0) {
        console.log("planet has pending arrivals");
        return;
      }
      if (targetPlanet.owner == srcPlanet.owner) {
        console.log(`${(0, import_procedural.getPlanetName)(targetPlanet)} is owned by ${targetPlanet.owner} and will abandon`);
        df.move(targetId, srcId, 0, 0, void 0, true);
        return;
      }
      if (hasJunk(targetPlanet))
        return;
    }
    if (srcPlanet.planetLevel === 1 || srcPlanet.planetLevel === 0) {
      console.log(`sending L1 or L0`);
      moveIsTakeJunk = true;
    }
    if (arrivals.length > 5) {
      return;
    }
    console.log(`Repeat Attack from ${(0, import_procedural.getPlanetName)(srcPlanet)} to ${(0, import_procedural.getPlanetName)(targetPlanet)}`);
    const departingForces = unconfirmedDepartures(srcPlanet);
    const TRIGGER_AMOUNT = Math.floor(srcPlanet.energyCap * PERCENTAGE_TRIGGER / 100);
    const FUZZY_ENERGY = Math.floor(srcPlanet.energy - departingForces);
    if (moveIsTakeJunk) {
      const FORCES = targetPlanet;
      const silver = calcSilver(srcPlanet, targetPlanet);
      console.log(`sending silver`, silver);
      const energyArriving = 1;
      const energyNeeded = Math.ceil(df.getEnergyNeededForMove(srcPlanet.locationId, targetPlanet.locationId, energyArriving));
      console.log(`sending energy frommoveisTakeJunk ${energyNeeded}`);
      df.move(srcId, targetId, energyNeeded, silver, void 0, abandoning);
      return;
    }
    if (FUZZY_ENERGY > TRIGGER_AMOUNT) {
      const overflow_send = planetCurrentPercentEnergy(srcPlanet) - (PERCENTAGE_TRIGGER - PERCENTAGE_SEND);
      const FORCES = Math.floor(srcPlanet.energyCap * overflow_send / 100);
      const silver = calcSilver(srcPlanet, targetPlanet);
      console.log(`sending silver`, silver);
      df.move(srcId, targetId, FORCES, silver, void 0, abandoning);
    }
  };
  var Spacing = {
    marginLeft: "12px",
    marginRight: "12px"
  };
  var VerticalSpacing = {
    marginBottom: "12px",
    marginLeft: "12px",
    marginRight: "12px"
  };
  var HalfVerticalSpacing = {
    marginBottom: "6px"
  };
  var Clickable = {
    cursor: "pointer",
    textDecoration: "underline"
  };
  var ActionEntry = {
    marginBottom: "5px",
    display: "flex",
    justifyContent: "space-between",
    color: ""
  };
  function centerPlanet(id) {
    ui.centerLocationId(id);
  }
  function Attack({ attack, onDelete }) {
    return import_standalone_module.html`
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
    onCreate
  }) {
    let [planet, setPlanet] = (0, import_standalone_module.useState)(ui.getSelectedPlanet());
    let [source, setSource] = (0, import_standalone_module.useState)(void 0);
    let [target, setTarget] = (0, import_standalone_module.useState)(void 0);
    let [srcHasJunk, setsrcHasJunk] = (0, import_standalone_module.useState)(false);
    let [srcNeedsJunk, setsrcNeedsJunk] = (0, import_standalone_module.useState)(false);
    (0, import_standalone_module.useLayoutEffect)(() => {
      let onClick = () => {
        setPlanet(ui.getSelectedPlanet());
      };
      window.addEventListener("click", onClick);
      return () => {
        window.removeEventListener("click", onClick);
      };
    }, []);
    return import_standalone_module.html`
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
        >${srcHasJunk ? "Y" : "N"}</span
      >
      <button style=${VerticalSpacing} onClick=${() => setsrcNeedsJunk(!srcNeedsJunk)}>
        Src Needs Junk
      </button>
      <span style=${{ ...Spacing, marginRight: "auto" }}
        >${srcNeedsJunk ? "Y" : "N"}</span
      >
      <button
        style=${VerticalSpacing}
        onClick=${() => target && source && onCreate(source.locationId, target.locationId, srcHasJunk, srcNeedsJunk)}
      >
        start
      </button>
    </div>
  `;
  }
  function AttackList({ repeater }) {
    const [attacks, setAttacks] = (0, import_standalone_module.useState)([...repeater.attacks]);
    (0, import_standalone_module.useEffect)(() => {
      const id = setInterval(() => {
        setAttacks([...repeater.attacks]);
      }, 1e3);
      setAttacks([...repeater.attacks]);
      return () => clearInterval(id);
    }, [attacks.length]);
    let actionList = {
      maxHeight: "150px",
      overflowX: "hidden",
      overflowY: "scroll"
    };
    let actionsChildren = attacks.map((action, index) => {
      return import_standalone_module.html`
      <${Attack}
        attack=${action}
        onDelete=${() => {
        repeater.removeAttack(index);
      }}
      />
    `;
    });
    return import_standalone_module.html`
    <h1>Set-up a Recurring Attack</h1>
    <i style=${{ ...VerticalSpacing, display: "block" }}
      >Auto-attack when source planet >75% energy. Will send all silver target can hold unless planet can upgrade
    </i>
    <${AddAttack}
      onCreate=${(source, target, srcHasJunk, srcNeedsJunk) => {
      if (srcHasJunk && srcNeedsJunk) {
        console.log("Cannot select Has and Needs");
        return;
      }
      repeater.addAttack(source, target, srcHasJunk, srcNeedsJunk);
    }}
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
  function App({ repeater }) {
    return import_standalone_module.html`<${AttackList} repeater=${repeater} />`;
  }
  var Plugin = class {
    stop() {
      window.__CORELOOP__.forEach((id) => window.clearInterval(id));
    }
    constructor() {
      this.repeater = new Repeater();
      this.root = void 0;
    }
    async render(container) {
      this.container = container;
      container.style.width = "600px";
      this.root = (0, import_standalone_module.render)(import_standalone_module.html`<${App} repeater=${this.repeater} />`, container);
    }
    destroy() {
      window.__CORELOOP__.forEach((id) => window.clearInterval(id));
      if (this.container)
        (0, import_standalone_module.render)(import_standalone_module.html`<div></div>`, this.container);
    }
  };
  var Repeat_Attack_default = Plugin;
})();
