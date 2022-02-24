// Abandon Planet

import {
    PlanetLevel,
    PlanetLevelNames,
  } from "https://cdn.skypack.dev/@darkforest_eth/types";
  import { getPlanetName } from "https://cdn.skypack.dev/@darkforest_eth/procedural";
  const pg = { getPlanetName: getPlanetName };
  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
  class Plugin {
    constructor() {}
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
      if (clickable) {
        planetElement.addEventListener("click", () => {
          ui.centerLocationId(locationId);
        });
      }
      return planetElement;
    };
  
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
        .sort((planet) => df.getDist(source, planet.locationId));
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
  
    getNSmallestPlanets = (n) => {
      let sortedPlanets = df
        .getMyPlanets()
        .filter(planet => planet.locationId !== df.getHomeHash())
        .sort((a, b) => a.planetLevel < b.planetLevel);
      console.log(`planets: ${sortedPlanets}`);
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
            sourcePlanetContainer.append(
              planet ? this.planetLink(planet) : "?????"
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
  
        const planets = this.getNSmallestPlanets(numPlanets);
        console.log(planets)
        for (let source of planets) {
          if (source.owner !== df.getAccount()) {
              console.log(`owner: ${source.owner}, account: ${df.getAccount()}`)
            alert("You must own the planet");
            return;
          }
          this.source.push(source.locationId);
          sourcePlanetContainer.append(
            source ? this.planetLink(source.locationId) : "?????"
          );
        }
      });
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
      container.appendChild(document.createElement("br"));
      container.appendChild(sourcePlanetContainer);
      container.appendChild(myButton);
    }
  
    destroy() {}
  }
  
  export default Plugin;