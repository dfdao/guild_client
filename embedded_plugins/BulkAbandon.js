// Abandon Planet

import {
  PlanetLevel,
  PlanetLevelNames,
} from "https://cdn.skypack.dev/@darkforest_eth/types";
import { getPlanetName } from "https://cdn.skypack.dev/@darkforest_eth/procedural";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const OFF_LIMITS = [
  '0000ff381808f9e5549b0a06fb40b83b46b2988603241ca756eede057c6b3d8b',
  '000026100002a129b93550ffd73470da9ae9b8db6bd18d5d3a49b53a5d45a01e'
]

import {
  canStatUpgrade,
  canPlanetUpgrade,
  getPlanetRank,
  //@ts-ignore
} from "https://plugins.zkga.me/utils/utils.js";

class Plugin {
  constructor() {
    this.maxLevel = 5;
    this.timeLevel = 120;
    this.whitelist = [];
    this.junkLostLabel = document.createElement("div");
    this.junkLostLabel.innerText = "Remove 0 Junk";
    this.autorun = false;
  }

  planetLink = (locationId, clickable = true) => {
    const planet = df.getPlanetWithId(locationId);
    if(!planet) return;
    const planetElement = document.createElement(clickable ? "button" : "span");
    planetElement.innerText = `L${
      planet.planetLevel
    }J${df.getDefaultSpaceJunkForPlanetLevel(
      planet.planetLevel
    )} ${getPlanetName(planet)}`;

    planetElement.title = locationId;
    planetElement.style.textDecoration = "underline";
    planetElement.style.background = "none";
    planetElement.style.border = "none";
    planetElement.style.color = "white";
    planetElement.style.outline = "none";
    planetElement.style.padding = "0";
    if (clickable) {
      planetElement.addEventListener("click", () => {
        ui.centerLocationId(locationId);
      });
    }
    return planetElement;
  };

  invaded(p) {
    return p.invader !== ZERO_ADDRESS;
  }

  captured(p) {
    return p.capturer !== ZERO_ADDRESS;
  }

  invadedAndNotCaptured(p) {
    return this.invaded(p) && !this.captured(p);
  }

  planetIsInsideCaptureZone(p, captureZones) {
    if (!p.location || !p.location.coords) return false;
    for (let zone of captureZones) {
      let zCoords = zone.coords;
      let zRadius = zone.radius;
      let x = zCoords.x - p.location.coords.x;
      let y = zCoords.y - p.location.coords.y;
      let dist = Math.sqrt(x * x + y * y);
      if (dist < zRadius) return true;
    }
    return false;
  }

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  getOwnedPlanetsInRange = (source) => {
    if (!source) return;

    const ownedPlanetsInRange = df
      .getPlanetsInRange(source, 100)
      .filter(
        (planet) =>
          planet.owner != ZERO_ADDRESS &&
          planet.locationId != source &&
          !OFF_LIMITS.includes(planet.locationId)
      )
      .sort(
        (a, b) => b.planetLevel - a.planetLevel
      );
    if (ownedPlanetsInRange.length === 0) return undefined;
    return ownedPlanetsInRange;
  };

  getNearestOwnedPlanetInRange = (source) => {
    const nearestPlanets = this.getOwnedPlanetsInRange(source);
    return nearestPlanets ? nearestPlanets[0] : undefined;
  };

  abandon = (evt) => {
    let sources = this.source;
    console.log('sources for abandon', sources);
    if (!sources) return;
    const acct = df.getAccount();
    if(!acct) return;
    sources.forEach((source) => {
      const src = df.getPlanetWithId(source);
      if(!src) return;
      if (df.getPlayerSpaceJunk(acct) < 1000) return;
      const target = this.getNearestOwnedPlanetInRange(source);
      if (!target) return;
      console.log(`source: ${getPlanetName(src)}, target: ${getPlanetName(target)}`);
      df.move(src.locationId, target.locationId, src.energy, 0, false, true);
    });
    this.removeAllChildNodes(this.sourcePlanetContainer);
  };

  updatePlanets(numPlanets) {
    if (!numPlanets) {
      alecort("input a number");
      return;
    }
    this.source = [];
    this.removeAllChildNodes(this.sourcePlanetContainer);
    this.sourcePlanetContainer.append("Planets to abandon:");

    const planets = this.getPlanetsToAbandon(numPlanets);
    let junk = 0;
    // console.log(planets);
    for (let planet of planets) {
      if (!planet) {
        this.sourcePlanetContainer.append("?????");
        continue;
      }
      const linkContainer = document.createElement("div");
      linkContainer.style.marginBottom = `4px`;

      const planetLink = this.planetLink(planet.locationId);
      const removeButton = document.createElement("button");
      removeButton.innerText = `X`;
      removeButton.style.float = "right";
      removeButton.addEventListener("click", (evt) => {
        this.source = this.source.filter(
          (p) =>
            p != planet.locationId &&
            planet.locationId != df.getHomeHash() &&
            df.getPlanetsInRange(p).length != 0
        );
        this.sourcePlanetContainer.removeChild(linkContainer);
        console.log(`length: ${this.source.length}`);
      });

      linkContainer.appendChild(planetLink);
      linkContainer.appendChild(removeButton);
      this.sourcePlanetContainer.append(linkContainer);
      this.source.push(planet.locationId);
      junk += df.getDefaultSpaceJunkForPlanetLevel(planet.planetLevel);
    }
    this.junkLostLabel.innerText = `Remove ${junk} Junk`;
  }

  clearSendTimer() {
    console.log("check clear timer")
    if (this.sendTimer) {
      console.log("clearing interval")
      clearInterval(this.sendTimer);
    }
  }
  getPlanetsToAbandon = (n) => {
    let captureZones = df.getCaptureZones();
    // console.log(JSON.stringify(df.getMyPlanets().map(p => p.planetLevel)))
    let sortedPlanets = df
      .getMyPlanets()
      .filter(
        (planet) =>
          planet.locationId != df.getHomeHash() &&
          !this.planetIsInsideCaptureZone(planet, captureZones) &&
          !this.invadedAndNotCaptured(planet) &&
          planet.planetLevel <= this.maxLevel &&
          getPlanetRank(planet) == 0
      )
      .sort((a, b) => a.planetLevel - b.planetLevel);
    // console.log(sortedPlanets.map((p) => p.planetLevel));
    if (sortedPlanets.length < n) return sortedPlanets;
    return sortedPlanets.slice(0, n);
  };
  render(container) {
    container.parentElement.style.minHeight = "unset";
    container.style.minHeight = "unset";

    container.style.width = "300px";

    const firstTextDiv = document.createElement("div");
    firstTextDiv.innerText = "Choose a planet and abandon it";

    this.sourcePlanetContainer = document.createElement("div");
    this.sourcePlanetContainer.innerText = "Current source: none";
    const addPlanetSourceButton = document.createElement("button");
    addPlanetSourceButton.innerText = "Choose Planet";
    addPlanetSourceButton.style.marginInline = "2px";
    addPlanetSourceButton.style.marginBottom = "10px";

    addPlanetSourceButton.addEventListener("click", () => {
      this.removeAllChildNodes(this.sourcePlanetContainer);
      this.sourcePlanetContainer.append("Planet to abandon:");
      const sourcePlanet = ui.getSelectedPlanet();
      if (sourcePlanet) {
        if (sourcePlanet.owner !== df.getAccount()) {
          alert("planet must be owned by player");
          return;
        }
        if (sourcePlanet.locationId == df.getHomeHash()) {
          alert("cannot abandon home planet");
          return;
        }
        this.source = [sourcePlanet.locationId];

        this.source.forEach((planet) => {
          if (!planet) {
            this.sourcePlanetContainer.append("?????");
            return;
          }
          const linkContainer = document.createElement("div");
          const planetLink = this.planetLink(planet);
          const removeButton = document.createElement("button");
          removeButton.innerText = `X`;
          removeButton.style.float = "right";
          removeButton.addEventListener("click", (evt) => {
            this.source.filter((p) => p !== planet);
            this.sourcePlanetContainer.removeChild(linkContainer);
          });
          linkContainer.appendChild(this.planetLink(planet));
          linkContainer.appendChild(removeButton);
          // console.log(linkContainer);
          this.sourcePlanetContainer.append(linkContainer);
        });
      }
    });
    let autoSendLabel = document.createElement("label");
    autoSendLabel.innerHTML = "Auto Abandon (Every 120 seconds)";
    autoSendLabel.style.paddingRight = "10px";

    let autoSendCheck = document.createElement("input");
    autoSendCheck.type = "checkbox";
    autoSendCheck.style.marginRight = "10px";
    autoSendCheck.checked = false;
    autoSendCheck.onchange = (evt) => {
      if (evt.target.checked) {
        console.log(`Starting abandon...`);
        this.updatePlanets(10);
        this.abandon();
        this.sendTimer = setInterval(() => {
          console.log(`console log in interval...`);
          this.updatePlanets(5);
          this.abandon();
        }, 1000 * this.timeLevel);
      } else {
        this.clearSendTimer();
      }
    };
    let inputLabel = document.createElement("span");
    inputLabel.innerText = "Choose N smallest planets to abandon:";

    this.userInput = document.createElement("input");
    this.userInput.placeholder = "# of planets";
    this.userInput.style.color = "black";
    this.userInput.style.padding = "5px";
    this.userInput.style.marginRight = "5px";
    this.userInput.style.width = "50%";

    const updateButton = document.createElement("button");
    updateButton.color = "red";

    updateButton.innerText = "update list";
    updateButton.addEventListener("click", (evt) => {
      let numPlanets = parseInt(this.userInput.value);
      this.updatePlanets(numPlanets);
    });

    let stepperLabel = document.createElement("label");
    stepperLabel.innerText = "Max level";
    stepperLabel.style.display = "block";

    let maxLevelRange = createRange(this.maxLevel);
    let maxLevelLabel = document.createElement("span");
    maxLevelLabel.innerText = `${maxLevelRange.value}`;
    maxLevelLabel.style.float = "right";
    maxLevelRange.onchange = (evt) => {
      maxLevelLabel.innerText = `${evt.target.value}`;
      try {
        this.maxLevel = parseInt(evt.target.value, 10);
      } catch (e) {
        console.error("could not parse level", e);
      }
    };

    let timeStepperLabel = document.createElement("label");
    timeStepperLabel.innerText = "Time";
    timeStepperLabel.style.display = "block";

    let timeRange = createTimeRange(this.timeLevel);
    let timeLabel = document.createElement("span");
    timeLabel.innerText = `${timeRange.value} seconds`;
    timeLabel.style.float = "right";
    timeRange.onchange = (evt) => {
      timeLabel.innerText = `${evt.target.value} seconds`;
      autoSendLabel.innerHTML = `Auto Abandon (Every ${evt.target.value} seconds)`;

      try {
        this.timeLevel = parseInt(evt.target.value, 120);
      } catch (e) {
        console.error("could not parse level", e);
      }
    };

    let inputWrapper = document.createElement("div");
    inputWrapper.style.marginBottom = "10px";

    inputWrapper.appendChild(inputLabel);

    inputWrapper.appendChild(this.userInput);
    inputWrapper.appendChild(updateButton);

    const myButton = document.createElement("button");
    myButton.color = "red";
    myButton.margin = "2px";

    myButton.innerText = "ABANDON";
    myButton.addEventListener("click", this.abandon);

    container.appendChild(firstTextDiv);
    container.appendChild(addPlanetSourceButton);
    container.appendChild(document.createElement("hr"));
    container.appendChild(inputWrapper);

    container.appendChild(stepperLabel);
    container.appendChild(maxLevelRange);
    container.appendChild(maxLevelLabel);

    container.appendChild(stepperLabel);
    container.appendChild(maxLevelRange);
    container.appendChild(maxLevelLabel);

    container.appendChild(document.createElement("br"));
    container.appendChild(this.sourcePlanetContainer);
    container.appendChild(myButton);
    container.appendChild(this.junkLostLabel);

    container.appendChild(timeStepperLabel);
    container.appendChild(timeRange);
    container.appendChild(timeLabel);

    container.appendChild(autoSendLabel);
    container.appendChild(autoSendCheck);
  }

  destroy() {}
}

export default Plugin;

function createRange(value) {
  let range = document.createElement("input");
  range.type = "range";
  range.min = "0";
  range.max = "8";
  range.step = "1";
  range.value = value;
  range.style.width = "80%";
  range.style.height = "24px";
  return range;
}

function createTimeRange(value) {
  let range = document.createElement("input");
  range.type = "range";
  range.min = "30";
  range.max = "1800";
  range.step = "30";
  range.value = value;
  range.style.width = "80%";
  range.style.height = "24px";
  return range;
}