import { 
    Planet, 
    Artifact,
    ArtifactType,
    LocatablePlanet,
    ArtifactId,
    ArtifactTypeNames
    //@ts-ignore
} from "@darkforest_eth/types";
import {
    isSpaceShip,
    isLocatable
    //@ts-ignore
} from "@darkforest_eth/gamelogic"
import { 
    address,
    artifactIdToDecStr,
    locationIdFromHexStr
    //@ts-ignore
} from "@darkforest_eth/serde";
import {
    EthAddress,
    //@ts-ignore
} from "@darkforest_eth/types";
import { 
    EthConnection
    // @ts-ignore
 } from "darkforest_eth/network";
import { 
    DarkForest
    // @ts-ignore
 } from "@darkforest_eth/contracts/typechain";

import { Button, Text, LineBreak, Stepper, Select } from "./views/basics";
import { 
    ContractTransaction,
    PopulatedTransaction,
    Signer, 
    Wallet
    // @ts-ignore
 } from 'ethers';
import { CONTRACT_PRECISION } from "@darkforest_eth/constants";
import { MoveArgIdxs, MoveArgs, ZKArgIdx } from "../src/_types/darkforest/api/ContractsAPITypes";
import { MoveSnarkContractCallArgs } from "@darkforest_eth/snarks";
import { getPlanetName } from "@darkforest_eth/procedural";
import { ShipOptions } from "./utils/Artifacts";

export interface Account {
    address: EthAddress;
    privateKey: string;
}

const ADDRESS_LOCAL_STORAGE_KEY = 'KNOWN_ADDRESSES';

function load(): Account[] {
const knownAddresses: EthAddress[] = [];
const accounts: Account[] = [];

// first we load the public addresses
const serializedAddresses = localStorage.getItem(ADDRESS_LOCAL_STORAGE_KEY);
if (serializedAddresses !== null) {
    const addresses = JSON.parse(serializedAddresses) as string[];
    for (const addressStr of addresses) {
    knownAddresses.push(address(addressStr));
    }
}

// then we load the private keys
    for (const addy of knownAddresses) {
        const skey = localStorage.getItem(`skey-${addy}`);

        if (skey !== null) {
        accounts.push({
            address: addy,
            privateKey: skey,
        });
        }
    }

    return accounts;
}

const move = async (
    forces: number, silver: number, artifact: ArtifactId, snarkArgs: MoveSnarkContractCallArgs, contract: DarkForest): Promise<ContractTransaction> => {
        const args: MoveArgs = [
        snarkArgs[ZKArgIdx.PROOF_A],
        snarkArgs[ZKArgIdx.PROOF_B],
        snarkArgs[ZKArgIdx.PROOF_C],
        [
            ...snarkArgs[ZKArgIdx.DATA],
            (forces * CONTRACT_PRECISION).toString(),
            (silver * CONTRACT_PRECISION).toString(),
            '0',
            '0',
        ],
        ] as MoveArgs; 

        if (artifact) {
            args[ZKArgIdx.DATA][MoveArgIdxs.ARTIFACT_SENT] = artifactIdToDecStr(artifact);
        }
    
    const tx = await contract.move(args[0], args[1], args[2], args[3], {gasLimit: 5000000, nonce: await contract.signer.getTransactionCount()});
    return tx;
};


class ISS implements DFPlugin {
    accounts: Account[];
    planetsWithShips: Map<EthAddress,Artifact[]>
    selectedAccount: EthAddress | undefined;
    spaceShipType: ArtifactType;
    ethConnection: EthConnection;
    signers: Map<EthAddress,Signer>
    contractConnections: Map<EthAddress,DarkForest>
    MoveShip: HTMLButtonElement;
    Status: HTMLParagraphElement;
    destinationPlanet: LocatablePlanet | undefined;
    destinationPlanetName: HTMLParagraphElement;
    updatePlanet: HTMLButtonElement;
    SpaceShipText: HTMLParagraphElement;
    Sst: HTMLDivElement;
    accountOptions: {value: string, label: string} [];
    SelectAccount: HTMLDivElement;

    constructor() {
        this.accounts = load()
        this.selectedAccount = this.accounts[0].address;
        this.planetsWithShips = new Map();
        this.signers = new Map();
        this.contractConnections = new Map();
        this.ethConnection = df.getEthConnection(); 
        this.spaceShipType = ArtifactType.ShipMothership;
        this.destinationPlanet = ui.getSelectedPlanet();
        this.accountOptions = [];
        this.getShipsAndPlanets();
        this.setSignersContractConnections();
    }

    setSignersContractConnections = () => {
        console.log(this.accounts);

        this.accounts.forEach(a => {
            this.accountOptions.push(
                {
                    value: a.address,
                    label: a.address.slice(0,6),
                }
            )
        })

        for(const account of this.accounts) {
            const signer = new Wallet(account.privateKey, this.ethConnection.getProvider());
            this.signers.set(account.address, signer); 
            var contract = df.getContractAPI().contract
            contract = contract.connect(signer)
            this.contractConnections.set(account.address, contract);
        }
    }

    controlsOwner = (planet: Planet): boolean => {
        return this.accounts.some(a => a.address === planet.owner);
    }
    
    getShipsAndPlanets() {
        for(const account of this.accounts) {
            // @ts-expect-error
            const ownedByMe = df.entityStore.getArtifactsOwnedBy(account.address)
                .filter((a) => isSpaceShip(a.artifactType));

            this.planetsWithShips.set(account.address,ownedByMe)
        }    
    }

    // move ship of specified type to destination planet
    async moveShipToPlanet(to: LocatablePlanet) {
        // For each account, move its ships to destination
        const account = this.selectedAccount;
        if(!account) throw new Error("account not selected");

        const ships = this.planetsWithShips.get(account) as Artifact[];
        const ship = ships.find(s => s.artifactType === this.spaceShipType) as Artifact;

        console.log(`ship type`, ArtifactTypeNames[ship.artifactType]);

        if(!ship) throw new Error ('no ship found');

        const from = df.getPlanetWithId(ship.onPlanetId) as LocatablePlanet;

        if(!isLocatable(from)) return;
        
        const oldX = from.location.coords.x;
        const oldY = from.location.coords.y;
        const newX = to.location.coords.x;
        const newY = to.location.coords.y;
        const xDiff = newX - oldX;
        const yDiff = newY - oldY;
        
        const distMax = Math.ceil(Math.sqrt(xDiff ** 2 + yDiff ** 2));
        
        const worldRadius = df.getWorldRadius()
        
        // @ts-expect-error
        const snarkArgs = await df.snarkHelper.getMoveArgs(
            oldX,
            oldY,
            newX,
            newY,
            worldRadius,
            distMax
            );

        const contract = this.contractConnections.get(account)

        if(!contract) throw new Error('contract not defined');

        const forces: number = 0;
        const silver: number = 0;
        this.Status.innerHTML = 'building move args...';
        try {
            const tx = await move(forces,silver,ship.id, snarkArgs, contract)
            this.Status.innerHTML = 'move submitted...';
            console.log(tx);
            const rct = await tx.wait();
            this.Status.innerHTML = 'move confirmed! wait a sec for ui to render...';
            console.log(rct);
        }
        catch(error) {
            this.Status.innerHTML = 'error :( - check console';
            console.log(error);
        }

    }
 
   /**
    * Called when plugin is launched with the "run" button.
    */
   async render(container: HTMLDivElement) {

    this.MoveShip = Button("move ship", async () => {
        if(!this.destinationPlanet) throw new Error ("Destination not selected");
        const to = this.destinationPlanet
        if(!isLocatable(to)) return;
        await this.moveShipToPlanet(to)
        
    });

    this.Status = Text('move status');

    this.SpaceShipText = Text(`Spaceship Type: ${ArtifactTypeNames[this.spaceShipType]}`);

    this.destinationPlanetName = Text(`Destination: ${getPlanetName(this.destinationPlanet)}`);

    this.updatePlanet = Button('update destination', () => {
        this.destinationPlanet = ui.getSelectedPlanet();
        this.destinationPlanetName.innerHTML = `Destination: ${getPlanetName(this.destinationPlanet)}`
    })

    this.Sst = Select(ShipOptions, (value) => {
        //@ts-ignore
        const type = parseInt(value) as ArtifactType;
        console.log(`selected ${ArtifactTypeNames[type]}`);
        this.SpaceShipText.innerHTML = `Spaceship Type: ${ArtifactTypeNames[type]}`
        this.spaceShipType = type;
    })

    this.SelectAccount = Select(this.accountOptions, (value) => {
        // @ts-ignore
        console.log(`addy`, value);
        // @ts-ignore
        this.selectedAccount = value;
    })

    container.append(this.SelectAccount);
    container.append(this.Sst);
    container.append(this.SpaceShipText);
    container.append(LineBreak());
    container.append(this.updatePlanet);
    container.append(this.destinationPlanetName);
    container.append(LineBreak());
    container.append(this.MoveShip);
    container.append(this.Status);

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
 export default ISS;
 