/**
 * Get the shortest path from a given asteroid belt to the nearest spacetime rip!
 */
//  console.log(df, ui);
import { PlanetType } from "https://cdn.skypack.dev/@darkforest_eth/types";
var pg = df.getProcgenUtils();


class AutoWithdraw {
  /**
   * A constructor can be used to keep track of information.
   */
  constructor() {
    this.maxPending = 1000;
    this.maxMoves = 10;
    this.maxEnergyPercent = 95;
    this.autoSeconds = 30;
    this.canvas = document.createElement("canvas");
    this.canvas.width = 400;
    this.movesDiv = document.createElement("div");
    this.moves = [];
    this.going = false;
  }

  shortestDistanceNode = (distances, visited) => {
    let shortest = null;

    for (let node in distances) {
      let currentIsShortest =
        shortest === null || distances[node] < distances[shortest];
      if (currentIsShortest && !visited.includes(node)) {
        shortest = node;
      }
    }
    return shortest;
  };

  findShortestPath = (startNode, endNode, graph) => {
    // establish object for recording distances from the start node
    let distances = {};
    distances[endNode] = Infinity;
    distances = Object.assign(distances, graph[startNode]);

    // track paths
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
      parents[child] = startNode;
    }

    // track nodes that have already been visited
    let visited = [];

    // find the nearest node
    let node = this.shortestDistanceNode(distances, visited);

    // for that node
    while (node) {
      // find its distance from the start node & its child nodes
      let distance = distances[node];
      let children = graph[node];
      // for each of those child nodes
      for (let child in children) {
        // make sure each child node is not the start node
        if (child === startNode) {
          continue;
        } else {
          // save the distance from the start node to the child node
          let newdistance = distance + children[child];
          // if there's no recorded distance from the start node to the child node in the distances object
          // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
          // save the distance to the object
          // record the path
          if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = node;
          }
        }
      }
      // move the node to the visited set
      visited.push(node);
      // move to the nearest neighbor node
      node = this.shortestDistanceNode(distances, visited);
    }

    // using the stored paths from start node to end node
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();

    // return the shortest path from start node to end node & its distance
    let results = {
      distance: distances[endNode],
      path: shortestPath,
    };

    return results;
  };

  makeGraph() {
    const planets = df.getMyPlanets();
    //  console.log(`planet: ${JSON.stringify(planets[0])}`)
    //  console.log(`planet: ${df.getPlanetWithId(JSON.stringify('0002d114007a639e2ee3eedc4790acfc28063aac99e16d0ef4127dddf93fe619'))}`)
    let m = new Object();
    for (const source of planets) {
      for (const dest of planets) {
        if (source.planetLevel > dest.planetLevel + 1) continue;
        if (!m[source.locationId]) m[source.locationId] = {};
        if (!m[dest.locationId]) m[dest.locationId] = {};

        if (source.locationId == dest.locationId) continue;
        const energyNeeded = Math.ceil(
          df.getEnergyNeededForMove(source.locationId, dest.locationId, 50)
        );
        if (energyNeeded < (source.energy * this.maxEnergyPercent) / 100) {
          let distance = df.getDist(source.locationId, dest.locationId);
          m[source.locationId][dest.locationId] = distance;
        }
      }
    }
    return m;
  }

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

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

  isRip = (planet) => {
    return planet.planetType === PlanetType.TRADING_POST;
  };

  isAsteroid = (planet) => {
    return planet.planetType === PlanetType.SILVER_MINE;
  };

  handleFind = () => {
    const graph = this.makeGraph();
    const asteroids = df.getMyPlanets().filter((p) => this.isAsteroid(p));
    const rips = df.getMyPlanets().filter((p) => this.isRip(p));

    for (const asteroid of asteroids) {
      const shortestPaths = rips.map((dest) =>
        this.findShortestPath(asteroid.locationId, dest.locationId, graph)
      );
      console.log(`all paths: ${JSON.stringify(shortestPaths)}`);

      const shortestPath = shortestPaths.sort((a, b) =>
        a.distance > b.distance ? b : a
      )[0];
      console.log(`all paths: ${shortestPaths}`);
      console.log(`shortest path: ${JSON.stringify(shortestPath)}`);

      this.addMoves(shortestPath.path, shortestPath.distance);
    }
  };

  addMoves = (shortestPath, distance) => {
    if (!shortestPath) return;
    this.moves.push(shortestPath);

    // this.removeAllChildNodes(this.moves);
    let idx = 1;
    console.log(`shortestPath: ${shortestPath}`);
    shortestPath.forEach((elem) => {
      const section = document.createElement("span");
      section.innerHTML += `${idx}: `;
      this.movesDiv.appendChild(section);
      this.movesDiv.appendChild(this.planetLink(elem));
      this.movesDiv.appendChild(document.createElement("br"));
      idx++;
    });
    const time = document.createElement("div");
    time.innerHTML += `Distance: ${distance.toFixed(2)}`;
    this.movesDiv.appendChild(time);
  };

  clearWithdrawTimer() {
    if (this.withdrawTimer) {
      clearInterval(this.withdrawTimer);
    }
  }

  clearSendTimer() {
    if (this.withdrawTimer) {
      clearInterval(this.withdrawTimer);
    }
  }
  getArrivalsForPlanet(planetId) {
    const unconfirmed = df
      .getUnconfirmedMoves()
      .filter((move) => move.to === planetId);
    const arrivals = df
      .getAllVoyages()
      .filter((arrival) => arrival.toPlanet === planetId);
    return arrivals.length + unconfirmed.length;
  }

  /**
   * A plugin's render function is called once.
   * Here, you can insert custom html into a game modal.
   * You render any sort of UI that makes sense for the plugin!
   */
  async render(div) {
    div.style.width = "400px";
    const firstTextDiv = document.createElement("div");
    firstTextDiv.innerText =
      "Autosend resources from asteroids to spacetime rips. " +
      "Make sure you select `calc paths` before automating";

    const secondTextDiv = document.createElement("div");

    let maxPendingLabel = document.createElement("label");
    maxPendingLabel.innerText = "Max pending moves";
    maxPendingLabel.style.display = "block";

    let maxPendingStepper = document.createElement("input");
    maxPendingStepper.type = "range";
    maxPendingStepper.min = "0";
    maxPendingStepper.max = "1000";
    maxPendingStepper.step = "10";
    maxPendingStepper.value = `${this.maxPending}`;
    maxPendingStepper.style.width = "85%";
    maxPendingStepper.style.height = "24px";

    let maxPendingInfo = document.createElement("span");
    maxPendingInfo.innerText = `${maxPendingStepper.value}`;
    maxPendingInfo.style.float = "right";

    maxPendingStepper.onchange = (evt) => {
      try {
        this.maxPending = parseInt(evt.target.value, 10);
        maxPendingInfo.innerText = `${this.maxPending}`;
      } catch (e) {
        console.error("could not parse max pending", e);
      }
    };

    let maxMovesLabel = document.createElement("label");
    maxMovesLabel.innerText = "Max moves to queue";
    maxMovesLabel.style.display = "block";

    let maxMovesStepper = document.createElement("input");
    maxMovesStepper.type = "range";
    maxMovesStepper.min = "10";
    maxMovesStepper.max = "1000";
    maxMovesStepper.step = "10";
    maxMovesStepper.value = `${this.maxMoves}`;
    maxMovesStepper.style.width = "85%";
    maxMovesStepper.style.height = "24px";

    let maxMovesInfo = document.createElement("span");
    maxMovesInfo.innerText = `${maxMovesStepper.value}`;
    maxMovesInfo.style.float = "right";

    maxMovesStepper.onchange = (evt) => {
      try {
        this.maxMoves = parseInt(evt.target.value, 10);
        maxMovesInfo.innerText = `${this.maxMoves}`;
      } catch (e) {
        console.error("could not parse max moves", e);
      }
    };

    let maxEnergyLabel = document.createElement("label");
    maxEnergyLabel.innerText = "Max % energy to spend";
    maxEnergyLabel.style.display = "block";

    let maxEnergyStepper = document.createElement("input");
    maxEnergyStepper.type = "range";
    maxEnergyStepper.min = "0";
    maxEnergyStepper.max = "100";
    maxEnergyStepper.step = "5";
    maxEnergyStepper.value = `${this.maxEnergyPercent}`;
    maxEnergyStepper.style.width = "85%";
    maxEnergyStepper.style.height = "24px";

    let maxEnergyPercentInfo = document.createElement("span");
    maxEnergyPercentInfo.innerText = `${maxEnergyStepper.value}%`;
    maxEnergyPercentInfo.style.float = "right";

    maxEnergyStepper.onchange = (evt) => {
      try {
        this.maxEnergyPercent = parseInt(evt.target.value, 10);
        maxEnergyPercentInfo.innerText = `${this.maxEnergyPercent}%`;
      } catch (e) {
        console.error("could not parse energy percent", e);
      }
    };

    let autoSecondsLabel = document.createElement("label");
    autoSecondsLabel.innerText = "Every X seconds";
    autoSecondsLabel.style.display = "block";

    let autoSecondsStepper = document.createElement("input");
    autoSecondsStepper.type = "range";
    autoSecondsStepper.min = "30";
    autoSecondsStepper.max = "600";
    autoSecondsStepper.step = "30";
    autoSecondsStepper.value = `${this.autoSeconds}`;
    autoSecondsStepper.style.width = "80%";
    autoSecondsStepper.style.height = "24px";

    let autoSecondsInfo = document.createElement("span");
    autoSecondsInfo.innerText = `${autoSecondsStepper.value} secs`;
    autoSecondsInfo.style.float = "right";

    autoSecondsStepper.onchange = (evt) => {
      try {
        this.autoSeconds = parseInt(evt.target.value, 10);
        autoSecondsInfo.innerText = `${this.autoSeconds} secs`;
      } catch (e) {
        console.error("could not parse auto seconds", e);
      }
    };

    const findButton = document.createElement("button");
    findButton.innerText = "calc paths";
    findButton.addEventListener("click", this.handleFind);
    let autoSendLabel = document.createElement("label");
    autoSendLabel.innerHTML = "Autosend";
    autoSendLabel.style.paddingInline = "10px";

    let sendButton = document.createElement("input");

    sendButton.type = "checkbox";
    sendButton.checked = false;

    sendButton.onchange = (evt) => {
      if (evt.target.checked) {
        this.sendTimer = setInterval(() => {
          for (const path of this.moves) {
            for (let i = path.length - 1; i > 0; i--) {
              const src = df.getPlanetWithId(path[i - 1]);
              const dest = df.getPlanetWithId(path[i]);
              if (src.silver < 200) continue;
              const arrivals = this.getArrivalsForPlanet(dest.locationId);
              if (arrivals > 5) {
                continue;
              }
              const silverRequested = src.silver;
              // Setting a 100 silver guard here, but we could set this to 0
              if (silverRequested < 100) {
                continue;
              }
              const energyLanding = 50;
              const energyNeeded = Math.ceil(
                df.getEnergyNeededForMove(
                  src.locationId,
                  dest.locationId,
                  energyLanding
                )
              );

              let pending = Object.keys(df.entityStore.unconfirmedMoves).length;

              if (pending > this.maxPending) {
                this.message.innerText = `Still ${pending} moves queued.`;
                return [moves, null];
              }
              // console.log(`moving ${src.silver} silver from ${pg.getPlanetName(src)} to ${pg.getPlanetName(dest)}`);

              df.move(
                src.locationId,
                dest.locationId,
                energyNeeded,
                silverRequested
              );
            }
          }
        }, 1000 * this.autoSeconds);
      } else {
        this.clearSendTimer();
      }
    };
    let autoWithdrawLabel = document.createElement("label");
    autoWithdrawLabel.innerHTML = "Autowithdraw";
    autoWithdrawLabel.style.paddingInline = "10px";

    let withdrawButton = document.createElement("input");

    withdrawButton.type = "checkbox";
    withdrawButton.checked = false;
    withdrawButton.innerText = this.going;
    withdrawButton.onchange = (evt) => {
      if (evt.target.checked) {
        this.withdrawTimer = setInterval(() => {
          const myPlanets = df.getMyPlanets();
          const spacetimeWithSilver = myPlanets.filter(
            (planet) =>
              planet.planetType === PlanetType.TRADING_POST &&
              planet.silver > 0 &&
              !planet.unconfirmedWithdrawSilver
          );
          for (const planet of spacetimeWithSilver) {
            console.log(
              `withdrawing ${planet.silver} silver from`,
              pg.getPlanetName(planet)
            );
            df.withdrawSilver(planet.locationId, Math.floor(planet.silver));
          }
        }, 1000 * this.autoSeconds);
      } else {
        this.clearWithdrawTimer();
      }
    };

    div.appendChild(firstTextDiv);
    div.appendChild(document.createElement("br"));
    div.appendChild(secondTextDiv);
    div.appendChild(document.createElement("br"));

    div.appendChild(maxPendingLabel);
    div.appendChild(maxPendingStepper);
    div.appendChild(maxPendingInfo);

    // // Moves
    // div.appendChild(maxMovesLabel);
    // div.appendChild(maxMovesStepper);
    // div.appendChild(maxMovesInfo);

    // Max energy
    div.appendChild(maxEnergyLabel);
    div.appendChild(maxEnergyStepper);
    div.appendChild(maxEnergyPercentInfo);

    // Moves
    div.appendChild(autoSecondsLabel);
    div.appendChild(autoSecondsStepper);
    div.appendChild(autoSecondsInfo);

    div.appendChild(findButton);
    div.appendChild(autoWithdrawLabel);
    div.appendChild(withdrawButton);
    div.appendChild(autoSendLabel);

    div.appendChild(sendButton);
    div.appendChild(this.movesDiv);
  }
  /**
   * When this is unloaded, the game calls the destroy method.
   * So you can clean up everything nicely!
   */
  destroy() {
    this.clearSendTimer()
    this.clearWithdrawTimer()
    }
  }
}

export default Autowithdraw;
