/**
 * Get the shortest path from a given asteroid belt to the nearest spacetime rip!
 */
//  console.log(df, ui);
import {  PlanetType} from "https://cdn.skypack.dev/@darkforest_eth/types";
var pg = df.getProcgenUtils();

/**
 * Plugins are just TypeScript (or modern JavaScript, if you prefer), so you can use imports, too!
 */
// @ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti";
/**
 * A plugin is a Class with render and destroy methods.
 * Other than that, you are free to do whatever, so be careful!
 */
class Readme {
  /**
   * A constructor can be used to keep track of information.
   */
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 400;
    this.canvas.height = 150;
    this.graph = this.makeGraph();
    this.source = null;
    this.dest = null;
    this.moves = document.createElement("div");
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

  findShortestPath = (startNode, endNode) => {
    // establish object for recording distances from the start node
    let distances = {};
    distances[endNode] = Infinity;
    distances = Object.assign(distances, this.graph[startNode]);

    // track paths
    let parents = { endNode: null };
    for (let child in this.graph[startNode]) {
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
      let children = this.graph[node];
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
        if(source.planetLevel > dest.planetLevel + 1) continue;
        if (!m[source.locationId]) m[source.locationId] = {};
        if (!m[dest.locationId]) m[dest.locationId] = {};

        if (source.locationId == dest.locationId) continue;
        const energyNeeded = Math.ceil(
          df.getEnergyNeededForMove(source.locationId, dest.locationId, 50)
        );
        if (energyNeeded < source.energy * 0.9) {
          let distance = df.getTimeForMove(source.locationId, dest.locationId);
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
  }

  handleClick = () => {
    const src = this.source;
    const rips = df.getMyPlanets().filter(p => this.isRip(p))
    console.log(`rips: ${JSON.stringify(rips)}`)
    if (src) {
      const shortestPaths = rips.map(dest => this.findShortestPath(src, dest.locationId));
      console.log(`all paths: ${JSON.stringify(shortestPaths)}`);

      const shortestPath = shortestPaths.sort((a, b) => a.distance > b.distance ? b : a)[0]
      console.log(`all paths: ${shortestPaths}`);
      console.log(`shortest path: ${JSON.stringify(shortestPath)}`);

      this.addMoves(shortestPath.path, shortestPath.distance);
    }
  };

  addMoves = (shortestPath, distance) => {
    if (!shortestPath) return;
    this.removeAllChildNodes(this.moves);
    let idx = 1;
    console.log(`shortestPath: ${shortestPath}`);
    shortestPath.forEach((elem) => {
      const section = document.createElement("span");
      section.innerHTML += `${idx}: `;
      this.moves.appendChild(section);
      this.moves.appendChild(this.planetLink(elem));
      this.moves.appendChild(document.createElement("br"));
      idx++;
    });
    const time = document.createElement("div");
    time.innerHTML += `Time: ${distance.toFixed(2)} seconds`;
    this.moves.appendChild(time);
  };
  /**
   * A plugin's render function is called once.
   * Here, you can insert custom html into a game modal.
   * You render any sort of UI that makes sense for the plugin!
   */
  async render(div) {
    div.style.width = "400px";
    const firstTextDiv = document.createElement("div");
    firstTextDiv.innerText =
      "Choose a source asteroid field and see the shortest" +
      "path to the nearest spacetime rip, based on time.";
    const sourcePlanetContainer = document.createElement("div");
    sourcePlanetContainer.innerText = "Current source: none";
    const addPlanetSourceButton = document.createElement("button");
    addPlanetSourceButton.innerText = "Add source";
    addPlanetSourceButton.style.marginRight = "10px";
    addPlanetSourceButton.addEventListener("click", () => {
      this.removeAllChildNodes(sourcePlanetContainer);
      const sourcePlanet = ui.getSelectedPlanet();
      if (sourcePlanet) {
        if (sourcePlanet.owner !== df.getAccount())
          alert("planet must be owned by player");
        else if (sourcePlanet.planetType !== PlanetType.SILVER_MINE)
          alert("cannot select a non-asteroid belt as source planet");
        else {
          console.log("this is a asteroid belt");
          this.source = sourcePlanet.locationId;
        }
        // make the planet either be "none" when nothing is selected, or the planet link.
        sourcePlanetContainer.append(
          "Current source: ",
          this.source ? this.planetLink(this.source) : "none"
        );
      }
    });

    const targetPlanetContainer = document.createElement("div");
    targetPlanetContainer.innerText = "Current target: none";
    // button for adding an target
    const addPlanetTargetButton = document.createElement("button");
    addPlanetTargetButton.innerText = "Add target";
    addPlanetTargetButton.style.marginRight = "10px";
    addPlanetTargetButton.addEventListener("click", () => {
      this.removeAllChildNodes(targetPlanetContainer);
      const targetedPlanet = ui.getSelectedPlanet();
      if (targetedPlanet) {
        this.dest = targetedPlanet.locationId;
      }
      // make the planet either be "none" when nothing is selected, or the planet link.
      targetPlanetContainer.append(
        "Current target: ",
        targetedPlanet ? this.planetLink(targetedPlanet.locationId) : "none"
      );
    });

    const secondTextDiv = document.createElement("div");
    const myButton = document.createElement("button");
    myButton.innerText = "get path";
    myButton.addEventListener("click", this.handleClick);

    const planet = document.createElement("div");

    div.appendChild(firstTextDiv);
    div.appendChild(document.createElement("br"));
    div.appendChild(secondTextDiv);
    div.appendChild(document.createElement("br"));
    div.appendChild(sourcePlanetContainer);
    // div.appendChild(targetPlanetContainer);
    div.appendChild(addPlanetSourceButton);
    // div.appendChild(addPlanetTargetButton);
    div.appendChild(myButton);
    div.appendChild(this.moves);
  }
  /**
   * When this is unloaded, the game calls the destroy method.
   * So you can clean up everything nicely!
   */
  destroy() {
    const ctx = this.canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
/**
 * For the game to know about your plugin, you must export it!
 *
 * Use `export default` to expose your plugin Class.
 */
export default Readme;
