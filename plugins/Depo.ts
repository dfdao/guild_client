import { Depo } from "./depo-contract";
import { BigNumber as EthersBN } from "ethers";
import {
  artifactIdFromEthersBN,
  artifactIdToDecStr,
} from "@darkforest_eth/serde";
import { DarkForest } from "@darkforest_eth/contracts/typechain";
import { ArtifactId } from "@darkforest_eth/types";

const DEPO_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        internalType: "address",
        name: "core",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "blessed",
        type: "address[]",
      },
    ],
  },
  {
    type: "function",
    name: "captain",
    inputs: [
      {
        internalType: "address",
        name: "pleb",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "captains",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "demote",
    inputs: [
      {
        internalType: "address",
        name: "pleb",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deposits",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dfCore",
    inputs: [],
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "masterAtArms",
    inputs: [
      {
        internalType: "address",
        name: "pleb",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mastersAtArms",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawArtifact",
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Demote",
    inputs: [
      {
        name: "demotor",
        type: "address",
        indexed: true,
      },
      {
        name: "demoted",
        type: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Deposit",
    inputs: [
      {
        name: "depositor",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Promote",
    inputs: [
      {
        name: "promotor",
        type: "address",
        indexed: true,
      },
      {
        name: "promoted",
        type: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawl",
    inputs: [
      {
        name: "withdrawer",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
];
const DEPO_ADDRESS = "0xd8c00a439ac617f51e1f8fb58fa7f7334be56f63";

const depo: Depo = await df.loadContract(DEPO_ADDRESS, DEPO_ABI);
export async function getTokenContract() {
  //@ts-expect-error
  return df.loadContract(TOKENS_CONTRACT_ADDRESS, TOKENS_APPROVAL_ABI);
}
const eventHandlers = {
  ["deposit"]: (addr: string, rawArtifactId: EthersBN) => {
    console.log("New Artifact is available for withdrawal");
  },
  ["withdrawal"]: (addr: string, rawArtifactId: EthersBN) => {
    console.log(
      `artifact ${artifactIdFromEthersBN(rawArtifactId)} was withdrawn`
    );
  },
};
const ethConnection = df.getEthConnection();
const filters = {
  address: DEPO_ADDRESS,
  filters: [
    depo.filters.Deposit(null, null).topics,
    depo.filters.Withdrawl(null, null).topics,
  ],
};

ethConnection.subscribeToContractEvents(depo, eventHandlers, filters);

const core: DarkForest = df.getContract();

const DepoAPI = {
  deposit: (artifactId: ArtifactId) => {
    // Transfers Artifact directly to Depo
    core["safeTransferFrom(address,address,uint256)"](
      df.getAccount()!,
      DEPO_ADDRESS,
      artifactIdToDecStr(artifactId)
    );
  },
  withdraw: (artifactId: ArtifactId) => {
    depo.withdrawArtifact(artifactIdToDecStr(artifactId));
  },
};

//@ts-ignore
window.depoContract = depo;
//@ts-ignore
window.DEPO = DepoAPI;
