import { getPlanetName } from "@darkforest_eth/procedural";
import { LocatablePlanet, LocationId, Planet, QueuedArrival } from "@darkforest_eth/types";

const MOTHERSHIP_ID = '000026100002a129b93550ffd73470da9ae9b8db6bd18d5d3a49b53a5d45a01e';
const MOTHERSHIP_CUTOFF = 25;
import { Button, LineBreak, Text } from '../embedded_plugins/views/basics'

function getArrivalsForPlanet(planetId: LocationId) {
    return df.getAllVoyages().filter(arrival => arrival.toPlanet === planetId).filter(p => p.arrivalTime > Date.now() / 1000);
  }

function distance(from:{x: number, y: number}, to:{x: number, y: number}) {
    return Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
}
function getInvaderArrivals(target: Planet, invader: Planet) {
    const arrivalsForPlanet = getArrivalsForPlanet(target.locationId);
    var invaderArrivals:QueuedArrival[]  = [];
    if(arrivalsForPlanet) {
        invaderArrivals = arrivalsForPlanet.filter(a => df.getPlanetWithId(a.fromPlanet)?.owner === invader.owner);
    }
    console.log(`Does ${getPlanetName(target)} have invader arrivals?`, invaderArrivals)
    return invaderArrivals
}

class Mommy implements DFPlugin {
    mothershipId: string; 
    crawlStatus: HTMLParagraphElement;
    crawl: boolean;
    startCrawl: HTMLButtonElement;
    sendTimer: NodeJS.Timer;
    timeLevel: number;
    dry: boolean;
    clearTimer: HTMLButtonElement;

    constructor() {
        this.mothershipId = MOTHERSHIP_ID;
        this.crawl = false;
        this.timeLevel = 10;
        this.dry = false;
    }

    crawlMother() {
        if(!this.crawl) return;

        const wormholes = df.getWormholes();

        const momId = this.mothershipId as LocationId;

        var mothership = df.getPlanetWithId(momId) as LocatablePlanet | undefined;

        this.crawlStatus.innerHTML = (`Starting distribution capture from ${getPlanetName(mothership)}` )

        if(!mothership) throw new Error("Mother not found");

        console.log(`Mothership has ${mothership.energy/1000}k`)

        if(mothership.energy < mothership.energyCap * 0.75) {
            this.crawlStatus.innerHTML = `Mother ship does't have 75% energy ...`;
            return;
        } 

        for (const hole of wormholes) {
            if (hole.to === momId) {
              const holeFrom = df.getPlanetWithId(hole.from) as LocatablePlanet | undefined;
              if (!holeFrom) continue;

              if(getInvaderArrivals(holeFrom,mothership).length > 0) {
                this.crawlStatus.innerHTML = `${getPlanetName(holeFrom)} has a move on the way, moving on ...`;
                continue;
              };

              if(holeFrom.energy >= holeFrom.energyCap * 0.9) {
                this.crawlStatus.innerHTML = `${getPlanetName(holeFrom)} is full or near full moving on ...`;
                continue;
              }

              const energySending = Math.floor(mothership.energy - (mothership.energyCap * MOTHERSHIP_CUTOFF / 100));
              const dist = distance(mothership.location.coords, holeFrom.location.coords)
              const energyNeeded = Math.ceil(df.getEnergyArrivingForMove(momId, hole.from, dist, energySending));

              if (energyNeeded <= 0) {
                this.crawlStatus.innerHTML = `Mother ship can't send enough energy to ${getPlanetName(holeFrom)} ...`;
                continue;
              }

              this.crawlStatus.innerHTML = `moving to ${getPlanetName(holeFrom)} with ${Math.floor(energySending / 1000)}k energy`;
              if(!this.dry) {
                df.move(momId, hole.from, energySending, 0);
                return;
              }
            }
        }
    }

    clearSendTimer() {
        console.log("check clear timer")
        clearInterval(this.sendTimer);
        if (this.sendTimer) {
          console.log("clearing interval")
          clearInterval(this.sendTimer);
        }
    }

   /**
    * Called when plugin is launched with the "run" button.
    */
   async render(container: HTMLDivElement) {

    this.crawlStatus = Text(`Crawl status: `);

    this.startCrawl = Button('Crawl from Mother. Click to start and stop (dont close plugin)', () => {
        this.crawl = true;
        console.log(`Starting crawl...`);
        this.crawlMother();
        this.sendTimer = setInterval(() => {
          this.crawlStatus.innerHTML = `Crawl status: in crawl interval...`;
          this.crawlMother();
        }, 1000 * this.timeLevel);
        
        console.log(`setInterval interval`, this.sendTimer)
    })

    this.clearTimer = Button('Stop crawler', () => {
        this.crawlStatus.innerHTML = `Crawl status: not crawling`;
        this.clearSendTimer();
    });

    container.append(this.startCrawl);
    container.append(this.crawlStatus);
    container.append(LineBreak());
    container.append(this.clearTimer);

   }
 
   /**
    * Called when plugin modal is closed.
    */
   destroy() {
       this.clearSendTimer()
   }
 }
 
 /**
  * And don't forget to export it!
  */
 export default Mommy;
