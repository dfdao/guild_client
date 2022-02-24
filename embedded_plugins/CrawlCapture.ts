import { 
    Planet, 
    Artifact,
    ArtifactType,
    LocatablePlanet,
    ArtifactId,
    ArtifactTypeNames,
    CaptureZone
    //@ts-ignore
} from "http://cdn.skypack.dev/@darkforest_eth/types";
import {
    isSpaceShip,
    isLocatable
    //@ts-ignore
} from "http://cdn.skypack.dev/@darkforest_eth/gamelogic"
import { 
    address,
    artifactIdToDecStr,
    locationIdFromHexStr
    //@ts-ignore
} from "http://cdn.skypack.dev/@darkforest_eth/serde";
import {
    EthAddress,
    //@ts-ignore
} from "http://cdn.skypack.dev/@darkforest_eth/types";
import { 
    EthConnection
    // @ts-ignore
 } from "http://cdn.skypack.dev/darkforest_eth/network";
import { 
    DarkForest
    // @ts-ignore
 } from "http://cdn.skypack.dev/@darkforest_eth/contracts/typechain";

import { Button, Text, LineBreak, Stepper, Select } from "./views/basics";
import { 
    ContractTransaction,
    PopulatedTransaction,
    Signer, 
    Wallet
    // @ts-ignore
 } from 'ethers';
// @ts-ignore
import { CONTRACT_PRECISION } from "http://cdn.skypack.dev/@darkforest_eth/constants";
    // @ts-ignore
import { MoveSnarkContractCallArgs } from "http://cdn.skypack.dev/@darkforest_eth/snarks";
    // @ts-ignore
import { getPlanetName } from "http://cdn.skypack.dev/@darkforest_eth/procedural";
import { ShipOptions } from "./utils/Artifacts";

export interface Account {
    address: EthAddress;
    privateKey: string;
}

const emptyAddress = "0x0000000000000000000000000000000000000000";
const PIRATES = "0x0000000000000000000000000000000000000000";

const secondsPerBlock=5.5;

const OFF_LIMITS_PLANETS = [
    '00003c9a0001a79de8fb5e29aca6241b62259c52778a6ba3aabfe8e048697e21',
]

const ADDRESS_LOCAL_STORAGE_KEY = 'KNOWN_ADDRESSES';

function planetWasAlreadyInvaded(p: Planet) {
	return p.invader !== emptyAddress;
}

function planetWasAlreadyCaptured(p: Planet) {
	return p.capturer !== emptyAddress;
}

function planetIsInsideCaptureZone(p: Planet, captureZones: Set<CaptureZone>) {
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

function getCaptureZoneTargets(  
    minCaptureLevel = 2,
    minPercentEnergyToKeep=10,
    attack=false,
    attackInvaded=false,
    secondsPerBlock=7,
    seedEnergy=100,
    capturePercentage = 25,
  ): Array<T>
  {
  
    if(!this.selectedPlanet) { 
      console.log ("Error: no selectedPlanet");
      return [];
    }
  
    const invader = this.selectedPlanet
  
    const captureZones = df.getCaptureZones();
    // @ts-expect-error
    const maxtime = Math.floor((ui.getCaptureZoneGenerator().nextChangeBlock - df.ethConnection.blockNumber)*secondsPerBlock)
  
    let targetList = df.getPlanetsInRange(invader.src, 25)
    // .filter((p) => df.getLocationOfPlanet(p.locationId)) / don't need this because getPlanetsInRange will check
    .filter((p) => (p.planetLevel >= minCaptureLevel)) // only capture min planet level
    .filter((p) => (attack ? true : p.owner == PIRATES)) // if attack is false, only capture unowned planets.
    .filter((p) => df.getTimeForMove(invader.locationId,p.locationId) < maxtime) // Make sure we can reach in time
    .filter((p) => (planetIsInsideCaptureZone(p,captureZones))) // only want planets in capture zone
    .filter((p) => (!planetWasAlreadyCaptured(p))) // don't attack planets that have already been captured
    .filter((p) => (attackInvaded ? true : !planetWasAlreadyInvaded(p))) // if true, attack planets that have been invaded but not captured. If false only attack non invaded
    .filter((p) => {
        // Want to capture with x% of energy
        const energyArriving = Math.floor(p.energyCap * capturePercentage / 100) + (p.energy * (p.defense / 100));
        // needs to be a whole number for the contract
        const energyNeeded = Math.ceil(df.getEnergyNeededForMove(invader.locationId, p.locationId, energyArriving));

        return (energyNeeded > (minPercentEnergyToKeep / 100 ) * invader.energyCap )
    });
    
  
  //   .sort((a, b) => df.getTimeForMove(a.locationId, targetId) - df.getTimeForMove(b.locationId, targetId))
  
    return targetList;
  }
  

class CrawlCapture implements DFPlugin {
    selectedPlanet: Planet;
    updatePlanet: HTMLButtonElement;
    destinationPlanetName: HTMLParagraphElement;
    minCaptureLevel: number;
    attack: boolean;
    attackInvaded: boolean;
    capturePercentage: number;


    constructor() {
        this.selectedPlanet = ui.getSelectedPlanet();
        this.minCaptureLevel = 2;
        this.attack = false;
        this.attackInvaded = false;
        this.capturePercentage = 25;

    }

    crawlCapture() {
        console.log(`Starting crawl capture from ${getPlanetName(this.selectedPlanet)}` )


    }

    
 
   /**
    * Called when plugin is launched with the "run" button.
    */
   async render(container: HTMLDivElement) {

    this.destinationPlanetName = Text(`Destination: ${getPlanetName(this.selectedPlanet)}`);

    this.updatePlanet = Button('Select INVADOOR', () => {
        this.selectedPlanet = ui.getSelectedPlanet();
        this.destinationPlanetName.innerHTML = `Destination: ${getPlanetName(this.selectedPlanet)}`
    })

    this.updatePlanet = Button('Crawl and Capture', () => {
        this.crawlCapture();
    })



    container.append(this.updatePlanet);
    container.append(this.destinationPlanetName);
    container.append(LineBreak());

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
 