(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // plugins/CrawlCapture.ts
  var import_procedural = __toModule(__require("http://cdn.skypack.dev/@darkforest_eth/procedural"));

  // embedded_plugins/views/basics.ts
  var Button = (innerHTML, onClick) => {
    let button = document.createElement("button");
    button.style.marginBottom = "10px";
    button.innerHTML = innerHTML;
    button.onclick = onClick;
    return button;
  };
  var Text = (innerHTML) => {
    let text = document.createElement("p");
    text.innerHTML = innerHTML;
    return text;
  };
  var LineBreak = () => document.createElement("br");

  // plugins/CrawlCapture.ts
  function getArrivalsForPlanet(planetId) {
    return df.getAllVoyages().filter((arrival) => arrival.toPlanet === planetId).filter((p) => p.arrivalTime > Date.now() / 1e3);
  }
  function getInvaderArrivals(target, invader) {
    const arrivalsForPlanet = getArrivalsForPlanet(target.locationId);
    var invaderArrivals = [];
    if (arrivalsForPlanet) {
      invaderArrivals = arrivalsForPlanet.filter((a) => df.getPlanetWithId(a.fromPlanet)?.owner === invader.owner);
    }
    console.log(`Does ${(0, import_procedural.getPlanetName)(target)} have invader arrivals?`, invaderArrivals);
    return invaderArrivals;
  }
  var CAPTURE_ZONE_POINTS = [
    0,
    0,
    25e4,
    5e5,
    75e4,
    1e6,
    1e7,
    2e7,
    5e7,
    1e8
  ];
  var PLANET_LEVEL_JUNK = [
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65
  ];
  var attackLimit = 10;
  var emptyAddress = "0x0000000000000000000000000000000000000000";
  var PIRATES = "0x0000000000000000000000000000000000000000";
  var secondsPerBlock = 5.5;
  function distance(from, to) {
    return Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
  }
  function planetWasAlreadyInvaded(p) {
    return p.invader !== emptyAddress;
  }
  function planetWasAlreadyCaptured(p) {
    return p.capturer !== emptyAddress;
  }
  function getCaptureZoneFromPlanet(p) {
    if (!p.location || !p.location.coords)
      return;
    for (let zone of df.getCaptureZones()) {
      let zCoords = zone.coords;
      let zRadius = zone.radius;
      let x = zCoords.x - p.location.coords.x;
      let y = zCoords.y - p.location.coords.y;
      let dist = Math.sqrt(x * x + y * y);
      if (dist < zRadius)
        return zone;
    }
  }
  function getPlanetsInZone(zone) {
    const coords = zone.coords;
    const radius = zone.radius;
    const planets = [];
    const startX = coords.x - radius;
    const startY = coords.y - radius;
    const endX = coords.x + radius;
    const endY = coords.y + radius;
    for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
        if (distance({ x: i, y: j }, { x: coords.x, y: coords.y }) > radius)
          continue;
        const planet = df.getPlanetWithCoords({ x: i, y: j });
        if (planet)
          planets.push(planet);
      }
    }
    return planets;
  }
  function getCaptureZoneTargets(invader, minCaptureLevel = 2, minPercentEnergyToKeep = 10, attack = false, attackInvaded = false, capturePercentage = 5, captureZone, maxtime) {
    if (!invader) {
      console.log("Error: no selectedPlanet");
      return;
    }
    let targetList = getPlanetsInZone(captureZone);
    const targets = targetList.filter((p) => p.owner != invader.owner && p.locationId !== invader.locationId && p.planetLevel >= minCaptureLevel && !planetWasAlreadyCaptured(p) && df.getTimeForMove(invader.locationId, p.locationId) < maxtime && getInvaderArrivals(p, invader).length === 0 && (attack || p.owner === PIRATES) && (attackInvaded || !planetWasAlreadyInvaded(p))).map((p) => {
      const energyArriving = Math.floor(p.energyCap * capturePercentage / 100) + p.energy * (p.defense / 100);
      const energyNeeded = Math.ceil(df.getEnergyNeededForMove(invader.locationId, p.locationId, energyArriving));
      return {
        planet: p,
        energyNeeded
      };
    }).filter((p) => {
      return p.energyNeeded < (100 - minPercentEnergyToKeep) / 100 * invader.energyCap;
    }).sort((p1, p2) => {
      if (p2.planet.planetLevel !== p1.planet.planetLevel) {
        return p2.planet.planetLevel - p1.planet.planetLevel;
      } else {
        const distFromInvader1 = distance(invader.location.coords, p1.planet.location.coords);
        const distFromInvader2 = distance(invader.location.coords, p2.planet.location.coords);
        return distFromInvader1 - distFromInvader2;
      }
    });
    console.log("results from filter", targets);
    return targets;
  }
  function getPlanetString(planet) {
    return `${planet.planetLevel} - ${(0, import_procedural.getPlanetName)(planet)}`;
  }
  function sendAttacks(invader, planets, minPercentEnergyToKeep = 10, dry = true, attackLimit2) {
    console.log(`Sending ${planets.length} attacks - Dry ${dry.toString()}`);
    let i = 0;
    const energyBudget = Math.floor((100 - minPercentEnergyToKeep) / 100 * invader.energy);
    let energySpent = 0;
    let moves = 0;
    let expectedScore = 0;
    let expectedJunk = 0;
    for (const p of planets) {
      console.log(`Budget ${energyBudget} vs Spent ${energySpent}`);
      if (energyBudget < energySpent)
        break;
      if (!attackLimit2 ? false : moves > attackLimit2)
        break;
      const energyNeeded = p.energyNeeded;
      const energyLeft = energyBudget - energySpent;
      console.log(`Left: ${energyLeft} Needed: ${energyNeeded}`);
      if (energyLeft < energyNeeded) {
        continue;
      }
      if (!dry)
        df.move(invader.locationId, p.planet.locationId, energyNeeded, 0);
      energySpent += energyNeeded;
      expectedScore += CAPTURE_ZONE_POINTS[p.planet.planetLevel];
      if (p.planet.owner === PIRATES)
        expectedJunk += PLANET_LEVEL_JUNK[p.planet.planetLevel];
      i++;
      moves++;
    }
    return [moves, expectedScore, expectedJunk];
  }
  function getTimeRemaining() {
    return Math.floor((ui.getCaptureZoneGenerator().nextChangeBlock - df.ethConnection.blockNumber) * secondsPerBlock);
  }
  var CrawlCapture = class {
    constructor() {
      this.selectedPlanet = ui.getSelectedPlanet();
      this.minCaptureLevel = 2;
      this.attack = true;
      this.attackInvaded = true;
      this.capturePercentage = 25;
      this.minPercentEnergyToKeep = 10;
      this.numPlanets = 5;
      this.dry = true;
    }
    crawlCapture() {
      console.log(`Starting crawl capture from ${(0, import_procedural.getPlanetName)(this.selectedPlanet)}`);
      if (!this.selectedPlanet)
        throw new Error("Planet not selected");
      this.timeRemaining.innerHTML = `${(getTimeRemaining() / 60).toFixed(2)} min remaining`;
      const planetsToCapture = getCaptureZoneTargets(this.selectedPlanet, this.minCaptureLevel, this.minPercentEnergyToKeep, this.attack, this.attackInvaded, this.capturePercentage, this.nearestCaptureZone, getTimeRemaining());
      console.log(`${planetsToCapture ? planetsToCapture.length : 0} planets to invade`);
      console.log("Planets to capture", planetsToCapture);
      if (!planetsToCapture) {
        this.crawlStatus.innerHTML = "No planets can be invaded";
        return;
      }
      planetsToCapture?.forEach((a) => console.log(getPlanetString(a.planet)));
      const [moves, points, junk] = sendAttacks(this.selectedPlanet, planetsToCapture, this.minPercentEnergyToKeep, this.dry, attackLimit);
      this.crawlStatus.innerHTML = `crawling ${moves} planets for ${points} points and ${junk} junk`;
    }
    async render(container) {
      this.destinationPlanetName = Text(`Invader: ${(0, import_procedural.getPlanetName)(this.selectedPlanet)}`);
      this.updatePlanet = Button("Select INVADOOR", () => {
        this.selectedPlanet = ui.getSelectedPlanet();
        if (!this.selectedPlanet)
          throw new Error("Planet not selected");
        this.destinationPlanetName.innerHTML = `Destination: ${(0, import_procedural.getPlanetName)(this.selectedPlanet)}`;
      });
      this.planetInCaptureZoneName = Text(`Planet in Capture Zone: ${(0, import_procedural.getPlanetName)(this.selectedPlanet)}`);
      this.setCaptureZone = Button("Select planet in capture zone", () => {
        this.planetInCaptureZone = ui.getSelectedPlanet();
        if (!this.planetInCaptureZone)
          throw new Error("Planet not selected");
        this.planetInCaptureZoneName.innerHTML = `Planet in Capture Zone: ${(0, import_procedural.getPlanetName)(this.planetInCaptureZone)}`;
        const zone = getCaptureZoneFromPlanet(this.planetInCaptureZone);
        if (zone) {
          this.nearestCaptureZone = zone;
          this.captureZoneText.innerHTML = `Coords ${JSON.stringify(zone.coords)}`;
        } else {
          this.captureZoneText.innerHTML = `Not in zone`;
        }
      });
      this.crawlStatus = Text(`Crawl status: `);
      this.startCrawl = Button("Crawl and Capture", () => {
        this.crawlCapture();
      });
      this.timeRemaining = Text(`${(getTimeRemaining() / 60).toFixed(2)} min remaining in for zone`);
      this.captureZoneText = Text(`Capture Zone: `);
      this.attackText = Text(`Attack owned?: ${this.attack.toString()}`);
      this.attackButton = Button("Attack owned planets?", () => {
        this.attack = !this.attack;
        this.attackText.innerHTML = `Attack owned?: ${this.attack.toString()}`;
      });
      this.attackInvadedButton = Button("Attack Already Invaded?", () => {
        this.attackInvaded = !this.attackInvaded;
        this.attackInvadedText.innerHTML = `Attack Invaded: ${this.attackInvaded.toString()}`;
      });
      this.attackInvadedText = Text(`Attack Invaded: ${this.dry.toString()}`);
      this.dryRun = Button("Dry Run?", () => {
        this.dry = !this.dry;
        this.dryText.innerHTML = `Dry Run: ${this.dry.toString()}`;
      });
      this.dryText = Text(`Dry Run: ${this.dry.toString()}`);
      container.append(this.timeRemaining);
      container.append(LineBreak());
      container.append(this.updatePlanet);
      container.append(this.destinationPlanetName);
      container.append(this.setCaptureZone);
      container.append(this.planetInCaptureZoneName);
      container.append(this.captureZoneText);
      container.append(this.attackButton);
      container.append(this.attackText);
      container.append(this.attackInvadedButton);
      container.append(this.attackInvadedText);
      container.append(this.dryRun);
      container.append(this.dryText);
      container.append(this.startCrawl);
      container.append(this.crawlStatus);
    }
    destroy() {
    }
  };
  var CrawlCapture_default = CrawlCapture;
})();
