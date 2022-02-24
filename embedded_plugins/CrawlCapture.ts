import { 
    Planet, 
    Artifact,
    ArtifactType,
    LocatablePlanet,
    ArtifactId,
    ArtifactTypeNames,
    CaptureZone,
    LocationId
    //@ts-ignore
} from '@darkforest_eth/types'
// from "http://cdn.skypack.dev/@darkforest_eth/types";
// @ts-ignore
import { getPlanetName } from "http://cdn.skypack.dev/@darkforest_eth/procedural";
import { Button, Text, LineBreak, Stepper, Select } from "./views/basics";

function getArrivalsForPlanet(planetId: LocationId) {
    return df.getAllVoyages().filter(arrival => arrival.toPlanet === planetId).filter(p => p.arrivalTime > Date.now() / 1000);
  }

const CAPTURE_ZONE_POINTS = [
    0,
    0,
    250000,
    500000,
    750000,
    1000000,
    10000000,
    20000000,
    50000000,
    100000000
]

const attackLimit = 10


const emptyAddress = "0x0000000000000000000000000000000000000000";
const PIRATES = "0x0000000000000000000000000000000000000000";

const secondsPerBlock=5.5;

function distance(from:{x: number, y: number}, to:{x: number, y: number}) {
    return Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
}

function planetWasAlreadyInvaded(p: Planet) {
	return p.invader !== emptyAddress;
}

function planetWasAlreadyCaptured(p: Planet) {
	return p.capturer !== emptyAddress;
}

function getCaptureZoneFromPlanet(p: LocatablePlanet): CaptureZone | undefined {
	if (!p.location || !p.location.coords) return;
	for (let zone of df.getCaptureZones()) {
		let zCoords = zone.coords;
		let zRadius = zone.radius;
		let x = zCoords.x - p.location.coords.x;
		let y = zCoords.y - p.location.coords.y;
		let dist = Math.sqrt(x*x + y*y);
		if (dist < zRadius) return zone;
	}
}

function getPlanetsInZone(zone: CaptureZone) {
    const coords = zone.coords;
    const radius = zone.radius;
    const planets: LocatablePlanet[] = [];
    const startX = coords.x - radius;
    const startY = coords.y - radius;
    const endX = coords.x + radius;
    const endY = coords.y + radius;
    for(let i = startX; i < endX; i++ ){
      for(let j = startY; j < endY; j++){
          // Ignore if outside circle
        if(distance({x: i, y: j}, {x: coords.x, y: coords.y}) > radius) continue;
        const planet = df.getPlanetWithCoords({x: i, y: j});
        if(planet) planets.push(planet);
      }
    }
    return planets;
}

function planetInZone(p: LocatablePlanet, zone: CaptureZone) {
	if (!p.location || !p.location.coords) return false;
    let zCoords = zone.coords;
    let zRadius = zone.radius;
    let x = zCoords.x - p.location.coords.x;
    let y = zCoords.y - p.location.coords.y;
    let dist = Math.sqrt(x*x + y*y);
    if (dist < zRadius) return true;
	return false;
}

function getCaptureZoneTargets(
    invader: Planet,  
    minCaptureLevel=2,
    minPercentEnergyToKeep=10,
    attack=false,
    attackInvaded=false,
    capturePercentage = 5,
    captureZone: CaptureZone,
    maxtime: number
  )
  {

    if(!invader) { 
      console.log ("Error: no selectedPlanet");
      return;
    }

    let targetList = getPlanetsInZone(captureZone)
    const targets = targetList
    .filter((p) => 
        p.planetLevel >= minCaptureLevel &&
        !planetWasAlreadyCaptured(p) &&
        p.locationId !== invader.locationId && 
        df.getTimeForMove(invader.locationId,p.locationId) < maxtime 
        &&
        (attack || p.owner == PIRATES)  
         && (attackInvaded || !planetWasAlreadyInvaded(p))
    )
    // .filter((p) => df.getLocationOfPlanet(p.locationId)) // need this bc potential undefined planet
    // .filter((p) => (p.planetLevel >= minCaptureLevel)) // only capture min planet level
    // .filter((p) => (!planetWasAlreadyCaptured(p))) // don't attack planets that have already been captured
    // .filter((p) => df.getTimeForMove(invader.locationId,p.locationId) < maxtime) // Make sure we can reach in time
    // .filter((p) => (attack ? true : p.owner == PIRATES)) // if attack is false, only capture unowned planets.
    // // .filter((p) => (planetInZone(p,captureZone))) // only want planets in capture zone
    // .filter((p) => (attackInvaded ? true : !planetWasAlreadyInvaded(p))) // if true, attack planets that have been invaded but not captured. If false only attack non invaded
    .map((p) => {
        // Want to capture with x% of energy
        const energyArriving = Math.floor(p.energyCap * capturePercentage / 100) + (p.energy * (p.defense / 100));
        // needs to be a whole number for the contract
        const energyNeeded = Math.ceil(df.getEnergyNeededForMove(invader.locationId, p.locationId, energyArriving));

        return {
           planet: p,
           energyNeeded
        }
    })
    .filter((p) => {
        return (p.energyNeeded < (( (100 - minPercentEnergyToKeep) / 100 ) * invader.energyCap) )
    })
    .sort((p1, p2) => p1.planet.planetLevel - p2.planet.planetLevel) // Sort ascending
  
    console.log("results from filter", targets);
    return targets;
  }
  
function getPlanetString(planet: Planet) {
    return `${planet.planetLevel} - ${getPlanetName(planet) }`
}

function sendAttacks(
    invader: Planet,
    planets: {planet: Planet, energyNeeded: number}[],
    minPercentEnergyToKeep=10,
    dry = true,
    attackLimit: number
) {
    console.log(`Sending ${planets.length} attacks - Dry ${dry.toString()}`)
    let i = 0;
    
    const energyBudget = Math.floor(((100 - minPercentEnergyToKeep) / 100) * invader.energy);

    let energySpent = 0;
    let moves = 0;
    let expectedScore = 0;

    for(const p of planets) {
        console.log(`Budget ${energyBudget} vs Spent ${energySpent}`);
        if (energyBudget < energySpent) break;
        // if no attack limit, don't break.
        if (!attackLimit ? false : moves > attackLimit) break;
        const energyNeeded = p.energyNeeded;
        const energyLeft = energyBudget - energySpent;

        console.log(`Left: ${energyLeft} Needed: ${energyNeeded}`);

        if (energyLeft < energyNeeded) {
            continue;
        }

        if(!dry) df.move(invader.locationId, p.planet.locationId, energyNeeded, 0);
        energySpent += energyNeeded;
        expectedScore += CAPTURE_ZONE_POINTS[p.planet.planetLevel];
        i++;
        moves ++;
    }
    return [moves,expectedScore];
}

function getTimeRemaining() {
       // @ts-expect-error
    return  Math.floor((ui.getCaptureZoneGenerator().nextChangeBlock - df.ethConnection.blockNumber) * secondsPerBlock)
}

class CrawlCapture implements DFPlugin {
    selectedPlanet: LocatablePlanet | undefined;
    updatePlanet: HTMLButtonElement;
    destinationPlanetName: HTMLParagraphElement;
    minCaptureLevel: number;
    attack: boolean;
    attackInvaded: boolean;
    capturePercentage: number;
    minPercentEnergyToKeep: number;
    startCrawl: HTMLButtonElement;
    crawlStatus: HTMLParagraphElement;
    numPlanets: number;
    dry: boolean;
    timeRemaining: HTMLParagraphElement;
    nearestCaptureZone: CaptureZone;
    planetInCaptureZone: LocatablePlanet | undefined;
    planetInCaptureZoneName: HTMLParagraphElement;
    setCaptureZone: HTMLButtonElement;
    captureZoneText: HTMLParagraphElement;


    constructor() {
        this.selectedPlanet = ui.getSelectedPlanet();
        this.minCaptureLevel=2;
        this.attack = false;
        this.attackInvaded = false;
        this.capturePercentage = 25;
        this.minPercentEnergyToKeep = 10;
        this.numPlanets = 5;
        this.dry = true;
    }


    crawlCapture() {
        console.log(`Starting crawl capture from ${getPlanetName(this.selectedPlanet)}` )
        if(!this.selectedPlanet) throw new Error("Planet not selected");
         this.timeRemaining.innerHTML = `${(getTimeRemaining()/60).toFixed(2)} min remaining`;
        
        const planetsToCapture = getCaptureZoneTargets(
            this.selectedPlanet,
            this.minCaptureLevel,
            this.minPercentEnergyToKeep,
            this.attack,
            this.attackInvaded,
            this.capturePercentage,
            this.nearestCaptureZone,
            getTimeRemaining()
        )
        console.log(`${planetsToCapture ? planetsToCapture.length : 0} planets to invade`)
        console.log("Planets to capture", planetsToCapture);
        if(!planetsToCapture) {
            this.crawlStatus.innerHTML = "No planets can be invaded";
            return;
        }
        
        planetsToCapture?.forEach((a) => console.log(getPlanetString(a.planet)));
        const [moves, points] = sendAttacks(
            this.selectedPlanet, 
            planetsToCapture, 
            this.minPercentEnergyToKeep, 
            this.dry,
            attackLimit
        );
        this.crawlStatus.innerHTML = `crawling ${moves} planets for ${points}`;
    }

   /**
    * Called when plugin is launched with the "run" button.
    */
   async render(container: HTMLDivElement) {

    this.destinationPlanetName = Text(`Invader: ${getPlanetName(this.selectedPlanet)}`);

    this.updatePlanet = Button('Select INVADOOR', () => {
        this.selectedPlanet = ui.getSelectedPlanet();
        if(!this.selectedPlanet) throw new Error ("Planet not selected");
        this.destinationPlanetName.innerHTML = `Destination: ${getPlanetName(this.selectedPlanet)}`
    })

    this.planetInCaptureZoneName = Text(`Planet in Capture Zone: ${getPlanetName(this.selectedPlanet)}`);

    this.setCaptureZone = Button('Select planet in capture zone', () => {
        this.planetInCaptureZone = ui.getSelectedPlanet();
        if(!this.planetInCaptureZone) throw new Error ("Planet not selected");
        this.planetInCaptureZoneName.innerHTML = `Planet in Capture Zone: ${getPlanetName(this.planetInCaptureZone)}`

        const zone = getCaptureZoneFromPlanet(this.planetInCaptureZone) as CaptureZone | undefined;
        if(zone) {
            this.nearestCaptureZone = zone;
            this.captureZoneText.innerHTML = `Coords ${JSON.stringify(zone.coords)}`;
        }
        else {
            this.captureZoneText.innerHTML = `Not in zone`;
        }
    })

    this.crawlStatus = Text(`Crawl status: `);

    this.startCrawl = Button('Crawl and Capture', () => {
        this.crawlCapture();
    })

    this.timeRemaining = Text(`${(getTimeRemaining()/60).toFixed(2)} min remaining in for zone`);

    this.captureZoneText = Text(`Capture Zone: `);

    container.append(this.timeRemaining);
    container.append(LineBreak());
    container.append(this.updatePlanet);
    container.append(this.destinationPlanetName);
    container.append(LineBreak());
    container.append(this.setCaptureZone);
    container.append(this.planetInCaptureZoneName);
    container.append(this.captureZoneText);
    container.append(LineBreak());
    container.append(this.startCrawl);
    container.append(this.crawlStatus);

   }
 
   /**
    * Called when plugin modal is closed.
    */
   destroy() {
       
   }
 }
 
 /**
  * And don't forget to export it!
  */
 export default CrawlCapture;


 