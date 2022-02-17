import { LocationId, Planet, WorldCoords } from "@darkforest_eth/types";
import { isUnconfirmedMoveTx } from "@darkforest_eth/serde"; // Needs "@darkforest_eth/serde": "6.7.0-arena-round-5-1.0",
/**
 * @param planetId
 * @param from
 * @returns
 */
export function checkNumInboundVoyages(planetId: LocationId, from = "") {
  if (from == "") {
    return (
      df
        .getAllVoyages()
        .filter(
          (v) =>
            v.toPlanet == planetId &&
            v.arrivalTime > new Date().getTime() / 1000
        ).length +
      df.getUnconfirmedMoves().filter((m) => m.to == planetId).length
    );
  } else {
    return (
      df
        .getAllVoyages()
        .filter((v) => v.toPlanet == planetId)
        .filter((v) => v.fromPlanet == from).length +
      df.getUnconfirmedMoves().filter((m) => m.to == planetId && m.from == from)
        .length
    );
  }
}
/**
 *
 * @param planet
 * @returns the sum of forces in unconfirmed transactions
 */
export function unconfirmedDepartures(planet: Planet): number {
  return (
    planet.transactions
      ?.getTransactions(isUnconfirmedMoveTx)
      .reduce((acc, tx) => acc + tx.intent.forces, 0) || 0
  );
}

/**
 *
 * @param planet
 * @returns energy / defense * 100
 */
export function planetPower(planet: Planet) {
  return (planet.energy * planet.defense) / 100;
}

/**
 *
 * @param planet
 * @param percentCap
 * @returns
 */
export function planetPercentEnergy(
  planet: Planet,
  percentCap: number = 25
): number {
  const departures = unconfirmedDepartures(planet);

  const estimatedEnergy = Math.floor(planet.energy - departures);
  return (estimatedEnergy * percentCap) / 100;
}

/**
 * Planets Energy as a Percentage
 * @param planet
 * @returns number between 0 & 100
 */
export function planetCurrentPercentEnergy(planet: Planet) {
  const departures = unconfirmedDepartures(planet);
  const estimatedEnergy = Math.floor(planet.energy - departures);
  return Math.floor((estimatedEnergy / planet.energyCap) * 100);
}

/**
 * Get Distance between Coordinate Pairs
 * @param a: WorldCoords
 * @param b: WorldCoords
 * @returns  number
 */
export function getDistance(a: WorldCoords, b: WorldCoords) {
  const dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  return dist;
}

/**
 * model energy arriving for a attack adjusted with receivers defense
 * @param srcId: Sending Planet
 * @param syncId: Receiving Planet
 * @param percentageSend: Percentage as a number between 0 & 100
 * @returns
 */
export function getEnergyArrival(
  srcId: LocationId,
  syncId: LocationId,
  percentageSend: number = 25
) {
  const _pl = df.getPlanetWithId(srcId);
  if (!_pl) {
    return;
  }
  const { energyCap } = _pl;
  const payload = (energyCap * percentageSend) / 100;
  const sync = df.getPlanetWithId(syncId);
  if (!sync) {
    return;
  }
  const dist = df.getDist(srcId, syncId);
  return (
    df.getEnergyArrivingForMove(srcId, syncId, dist, payload) /
    (sync.defense / 100)
  );
}

/**
 * model energy arriving for a Move
 * @param srcId: Sending Planet
 * @param syncId: Receiving Planet
 * @param percentageSend: Percentage as a number between 0 & 100
 * @returns
 */
export function getEnergyArrivalAbs(
  srcId: LocationId,
  syncId: LocationId,
  energy: number
) {
  const sync = df.getPlanetWithId(syncId);
  if (!sync) {
    return;
  }
  const dist = df.getDist(srcId, syncId);
  return df.getEnergyArrivingForMove(srcId, syncId, dist, energy);
}

/**
 * (Probably use findWarmWeapons instead)
 * Find Nearby Planets that you own that can attack `planetLocationId`
 * @param planetLocationId: Center point of the search
 * @param maxDistance: Max distance to search
 * @param levelLimit: Minimum Level for planet
 * @param numOfPlanets: Maximum number of planets to return
 * @returns list of planets sorted by ability to do the most damage to `planetLocationId`
 */
export function findNearBy(
  planetLocationId: LocationId,
  maxDistance: number = 5000,
  levelLimit: number = 3,
  numOfPlanets: number = 5
) {
  const owned = df.getMyPlanets();

  const ownedFiltered = owned
    .filter((p) => p.locationId !== planetLocationId)
    .filter((p) => p.planetLevel <= levelLimit)
    .filter((p) => df.getDist(planetLocationId, p.locationId) < maxDistance);
  ownedFiltered.sort(
    (a, b) =>
      df.getDist(planetLocationId, a.locationId) -
      df.getDist(planetLocationId, b.locationId)
  );
  return ownedFiltered.slice(0, numOfPlanets).map((p) => {
    const landingForces = getEnergyArrival(p.locationId, planetLocationId);
    return {
      landingForces,
      planet: p,
    };
  });
}

/**
 * Find Nearby Planets that you own that can attack `planetLocationId`
 * @param planetLocationId: Center point of the search
 * @param levelLimit: Maximum Level for planet
 * @param numOfPlanets: Maximum number of planets to return
 * @param  maxTime: Amount of time the move can take
 * @param excludeList: List of IDs to exclude
 * @returns list of planets sorted by ability to do the most damage to `planetLocationId`
 */
export function findWeapons(
  planetLocationId: LocationId,
  levelLimit = 7,
  numOfPlanets = 5,
  maxTime = 30 * 60,
  excludeList: LocationId[] = []
) {
  const warmWeapons = df
    .getMyPlanets()
    .filter((p) => p.locationId !== planetLocationId)
    .filter((p) => p.planetLevel <= levelLimit)
    .filter((p) => !excludeList.includes(p.locationId))
    .filter((p) => df.getTimeForMove(p.locationId, planetLocationId) < maxTime);
  const mapped = warmWeapons.map((p) => {
    const landingForces = getEnergyArrival(
      p.locationId,
      planetLocationId,
      planetCurrentPercentEnergy(p)
    );
    return {
      landingForces,
      planet: p,
    } as {
      landingForces: number;
      planet: Planet;
    };
  });

  mapped.sort((a, b) => {
    return b.landingForces - a.landingForces;
  });
  return mapped.map((p) => p.planet).slice(0, numOfPlanets);
}

/**
 * model the amount of energy needed to send from src planet to capture sync planet
 * (not adjusted for flight time and sync planet's energy growth)
 * @param srcId
 * @param syncId
 * @returns number of energy
 */
export function modelEnergyNeededToTake(srcId: LocationId, syncId: LocationId) {
  const src = df.getPlanetWithId(srcId);
  const sync = df.getPlanetWithId(srcId);
  if (!src || !sync) {
    return;
  }
  const dist = df.getDist(srcId, syncId);
  const power_needed_on_arrival = planetPower(sync) * 1.2; //Want a little buffer
  const scale = (1 / 2) ** (dist / src.range);
  const power_needed_to_send =
    power_needed_on_arrival / scale + 0.05 * src.energyCap;

  return power_needed_to_send;
}

/**
 *
 * @param energy Current Energy
 * @param energyGrowth Energy Growth
 * @param energyCap Energy Cap
 * @param duration number of seconds
 * @returns planet energy at the end of the duration
 */
export function modelEnergyGrowth(
  energy: number,
  energyGrowth: number,
  energyCap: number,
  duration = 10
) {
  const denom =
    Math.exp((-4 * energyGrowth * duration) / energyCap) *
      (energyCap / energy - 1) +
    1;
  return energyCap / denom;
}

/**
 * !Use to model energy in excess of 100%!
 * @param energy Current Energy
 * @param energyGrowth Energy Growth
 * @param energyCap Energy Cap
 * @param duration number of seconds
 * @returns planet energy at the end of the duration
 */
export function modelEnergyDecline(
  energy: number,
  energyGrowth: number,
  energyCap: number,
  duration = 10
) {
  return energy - modelEnergyGrowth(energy, energyGrowth, energyCap, duration);
}

/**
 * !Use to model energy in excess of 100%!
 * @param energy Current Energy
 * @param energyGrowth Energy Growth
 * @param energyCap Energy Cap
 * @param duration number of seconds
 * @returns planet energy at the end of the duration as a percentage
 */
export function modelEnergyDeclinePercentage(
  energy: number,
  energyGrowth: number,
  energyCap: number,
  duration = 10
) {
  return (
    ((energy - modelEnergyGrowth(energy, energyGrowth, energyCap, duration)) /
      energy) *
    100
  );
}

/**
 * How much energy is the planet generating right meow.
 * @param energy Planets Current Energy
 * @param energyGrowth Planets energy growth
 * @param energyCap Planets Energy Growth
 * @returns Current Energy Growth Rate
 */
export function modelCurrentEnergyGrowth(
  energy: number,
  energyGrowth: number,
  energyCap: number
) {
  const oneTick = 1;

  const denom =
    Math.exp((-4 * energyGrowth * oneTick) / energyCap) *
      (energyCap / energy - 1) +
    1;
  return energyCap / denom - energy;
}
