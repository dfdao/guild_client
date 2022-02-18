import { LocatablePlanet, Planet } from "@darkforest_eth/types";
import { Button, Text, LineBreak, Stepper } from "./views/basics";

declare global {
  interface Window {
    viewPlanets: (planets: Planet[]) => void;
  }
}

function isLocatable(planet: Planet): planet is LocatablePlanet {
  return (planet as LocatablePlanet).location !== undefined;
}
const getTextForPlanet = (planet: Planet) => {
  return ` ${planet.planetLevel} ${planet.locationId.slice(0, 5)}`;
};

let isDoubleRange = (planet: Planet) => planet?.bonus[2];
//@ts-ignore
let isNotMine = (planet: Planet) => planet.owner != df.account;
let gtl2 = (planet: Planet) => planet.planetLevel >= 2;
let isFoundry = (planet: Planet) => planet.planetType === 2;

let findPredicate = (predicate: (planet: Planet) => Boolean) => {
  return () => {
    return Array.from(
      new Set(
        df
          .getMyPlanets()
          .map((p) =>
            df
              .getPlanetsInRange(p.locationId, 75)
              .filter(isNotMine)
              .filter(predicate)
          )
          .reduce((acc, planets) => {
            return [...acc, ...planets];
          }, [])
      )
    );
  };
};

const distance = (planet: LocatablePlanet) => {
  const { x, y } = planet.location.coords;
  return Math.sqrt(x ** 2 + y ** 2);
};

let filters = {
  getDoubleRange: findPredicate(isDoubleRange),
  getFoundry: findPredicate(isFoundry),
  myPlanets: () => {
    return df.getMyPlanets();
  },
} as const;

class Plugin {
  container: HTMLDivElement | undefined;
  constructor() {}

  /**
   * Called when plugin is launched with the "run" button.
   */
  async render(container: HTMLDivElement) {
    this.container = container;
    container.style.width = "380px";
    let planetList: Planet[] = [];
    let pointer = 0;
    let state = {
      minLevel: 0,
    };

    window.viewPlanets = (planets) => {
      pointer = 0;
      planetList = planets;
    };

    const PlanetInfo = Button("No planets to show", () => {
      if (planetList.length > 0 && planetList?.[pointer])
        ui.centerLocationId(planetList[pointer].locationId);
    });

    container.append(PlanetInfo);
    const PlanetCounter = Text("");
    container.append(PlanetCounter);
    container.append(document.createElement("br"));
    container.append(
      Button("<", () => {
        if (pointer > 0) pointer -= 1;
        PlanetInfo.innerHTML = getTextForPlanet(planetList?.[pointer]);
        ui.centerLocationId(planetList[pointer].locationId);
        PlanetCounter.innerHTML = `${pointer} of ${planetList.length}`;
      })
    );
    container.append(
      Button(">", () => {
        if (pointer < planetList.length) pointer += 1;
        PlanetInfo.innerHTML = getTextForPlanet(planetList?.[pointer]);
        ui.centerLocationId(planetList[pointer].locationId);
        PlanetCounter.innerHTML = `${pointer} of ${planetList.length}`;
      })
    );
    container.append(
      Stepper(
        //@ts-ignore
        (evt: MouseEvent) => (state.minLevel = parseInt(evt?.target?.value))
      )
    );
    container.append(document.createElement("br"));
    container.append(document.createElement("br"));
    container.append(Text("filters:"));
    Object.keys(filters).forEach((key: keyof typeof filters) => {
      container.append(
        Button(key, () => {
          console.log(key, filters[key]);
          window.viewPlanets(filters[key]());
          PlanetCounter.innerHTML = `${pointer} of ${planetList.length}`;
        })
      );
      container.append(LineBreak());
    });

    container.append(Text("tweaks"));
    container.append(
      Button("Filter Level", () => {
        planetList = planetList.filter((p) => p.planetLevel > state.minLevel);
      })
    );
    container.append(
      Button("Closest", () => {
        planetList.sort((a, b) => {
          if (!isLocatable(a)) {
            return 1;
          }
          if (!isLocatable(b)) {
            return -1;
          }
          return distance(a) - distance(b);
        });
      })
    );
  }

  /**
   * Called when plugin modal is closed.
   */
  destroy() {}
}

/**
 * And don't forget to export it!
 */
export default Plugin;
