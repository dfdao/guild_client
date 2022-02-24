// Abandon Planet

import {
    PlanetLevel,
    PlanetLevelNames,
  } from "https://cdn.skypack.dev/@darkforest_eth/types";
  import { getPlanetName } from "https://cdn.skypack.dev/@darkforest_eth/procedural";
  const pg = { getPlanetName: getPlanetName };
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
  
  import {
    canStatUpgrade,
    canPlanetUpgrade,
    getPlanetRank,
    //@ts-ignore
  } from 'https://plugins.zkga.me/utils/utils.js';
  
  class Plugin {
    constructor() {
      this.maxLevel = 5;
      this.whitelist = [];
  
    }
    planetLink = (locationId, clickable = true) => {
      const planet = df.getPlanetWithId(locationId);
      const planetElement = document.createElement(clickable ? "button" : "span");
      planetElement.innerText = `L${
        planet.planetLevel
      }R${planet.upgradeState.reduce((a, b) => a + b, 0)} ${pg.getPlanetName(
        planet
      )}`;
      planetElement.title = locationId;
      planetElement.style.textDecoration = "underline";
      planetElement.style.background = "none";
      planetElement.style.border = "none";
      planetElement.style.color = "white";
      planetElement.style.outline = "none";
      planetElement.style.padding = "0";
      console.log()
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
        let dist = Math.sqrt(x*x + y*y);
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
            planet.owner !== ZERO_ADDRESS && 
            planet.locationId !== source
        )
        // Get closest planet
        .sort((p1, p2) => df.getDist(p1.locationId, source) - df.getDist(p2.locationId, source));
      if (ownedPlanetsInRange.length === 0) return undefined;
      return ownedPlanetsInRange;
    };
  
    getNearestOwnedPlanetInRange = (source) => {
      const nearestPlanets = this.getOwnedPlanetsInRange(source);
      return nearestPlanets ? nearestPlanets[0] : undefined;
    };
  
    abandon = (evt) => {
      let sources = this.source;
      if(!sources) return;
      sources.forEach(source => {
          const target = this.getNearestOwnedPlanetInRange(source);
          if(!target) return;
          console.log(`source: ${source}, target: ${target}`)
          df.move(
              source,
              target.locationId,
              source.energy,
              0,
              false,
              true
            );
      })
    };
  
    handleMultiplePlanets = (evt) => {
      const nearestPlanets = this.getOwnedPlanetsInRange(this.source);
    };
  
    getPlanetsToAbandon = (n) => {
      let captureZones = df.getCaptureZones();
      // console.log(JSON.stringify(df.getMyPlanets().map(p => p.planetLevel)))
      let sortedPlanets = df
        .getMyPlanets()
        .filter(planet => 
          planet.locationId !== df.getHomeHash() &&
          !this.planetIsInsideCaptureZone(planet, captureZones) &&
          !this.invadedAndNotCaptured(planet) &&
          planet.planetLevel <= this.maxLevel &&
          getPlanetRank(planet) == 0
        )
        .sort((a, b) => a.planetLevel - b.planetLevel);
      console.log(sortedPlanets.map(p => p.planetLevel))
      if (sortedPlanets.length < n) return sortedPlanets;
      return sortedPlanets.slice(0, n);
    };
    render(container) {
      container.parentElement.style.minHeight = "unset";
      container.style.minHeight = "unset";
  
      container.style.width = "300px";
  
      const firstTextDiv = document.createElement("div");
      firstTextDiv.innerText = "Choose a planet and abandon it";
  
      const sourcePlanetContainer = document.createElement("div");
      sourcePlanetContainer.innerText = "Current source: none";
      const addPlanetSourceButton = document.createElement("button");
      addPlanetSourceButton.innerText = "Choose Planet";
      addPlanetSourceButton.style.marginInline = "2px";
      addPlanetSourceButton.style.marginBottom = "10px";
  
      addPlanetSourceButton.addEventListener("click", () => {
        this.removeAllChildNodes(sourcePlanetContainer);
        sourcePlanetContainer.append("Planet to abandon:")
        const sourcePlanet = ui.getSelectedPlanet();
        if (sourcePlanet) {
          if (sourcePlanet.owner !== df.getAccount()) {
            alert("planet must be owned by player");
            return;
          }
          this.source = [sourcePlanet.locationId];
  
          this.source.forEach((planet) => {
            if(!planet) {
              sourcePlanetContainer.append("?????")
            };
            const linkContainer = document.createElement("div")
            const planetLink = this.planetLink(planet);
            const removeButton = document.createElement("button");
            removeButton.innerText = `X`;
            removeButton.style.float = 'right';
            removeButton.addEventListener("click", (evt) => {
              this.source.filter(p => p !== planet);
              sourcePlanetContainer.removeChild(linkContainer);
            });
            linkContainer.appendChild(this.planetLink(planet));
            linkContainer.appendChild(removeButton)
            console.log(linkContainer)
            sourcePlanetContainer.append(
              linkContainer
            );
  
          });
        }
      });
  
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
        if (numPlanets == NaN) {
          alert("input a number");
          return;
        }
        this.source = [];
        this.removeAllChildNodes(sourcePlanetContainer);
        sourcePlanetContainer.append("Planets to abandon:")
  
        const planets = this.getPlanetsToAbandon(numPlanets);
        console.log(planets)
        for (let planet of planets) {
          if(!planet) {
            sourcePlanetContainer.append("?????")
          };
          const linkContainer = document.createElement("div")
          linkContainer.style.marginBottom = `4px`;
  
          const planetLink = this.planetLink(planet.locationId);
          const removeButton = document.createElement("button");
          removeButton.innerText = `X`;
          removeButton.style.float = 'right';
          removeButton.addEventListener("click", (evt) => {
  
            this.source = this.source.filter(p => {
              console.log(`p: ${p}\n planet.locationId: ${planet.locationId}`)
              return p != planet.locationId
            });
            sourcePlanetContainer.removeChild(linkContainer);
            console.log(`length: ${this.source.length}`)
          });
  
          linkContainer.appendChild(planetLink);
          linkContainer.appendChild(removeButton)
          console.log(linkContainer)
          sourcePlanetContainer.append(
            linkContainer
          );
          this.source.push(planet.locationId)
  
        }
      });
  
      let stepperLabel = document.createElement('label');
      stepperLabel.innerText = 'Max level';
      stepperLabel.style.display = 'block';
  
      let maxLevelRange = createRange(this.maxLevel);
      let maxLevelLabel = document.createElement('span');
      maxLevelLabel.innerText = `${maxLevelRange.value}`;
      maxLevelLabel.style.float = 'right';
      maxLevelRange.onchange = (evt) => {
          maxLevelLabel.innerText = `${evt.target.value}`;
          try {
              this.maxLevel = parseInt(evt.target.value, 10);
          } catch (e) {
              console.error('could not parse level', e);
          }
      }
  
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
  
      container.appendChild(document.createElement("br"));
      container.appendChild(sourcePlanetContainer);
      container.appendChild(myButton);
    }
  
    destroy() {}
  }
  
  export default Plugin;
  
  function createRange(value) {
    let range = document.createElement('input');
    range.type = 'range';
    range.min = '0';
    range.max = '8';
    range.step = '1';
    range.value = value;
    range.style.width = '80%';
    range.style.height = '24px';
    return range;
  }