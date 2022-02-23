import { Depo } from "./typechain";
import { DEPO_ABI } from "./constants";
import { BigNumber as EthersBN, Contract } from "ethers";
import { DarkForest } from "@darkforest_eth/contracts/typechain";
import { ArtifactId } from "@darkforest_eth/types";
import {
  artifactIdFromEthersBN,
  artifactIdToDecStr,
  //@ts-ignore
} from "http://cdn.skypack.dev/@darkforest_eth/serde";
import { LogDescription } from "ethers/lib/utils";

export function initializeState(events: LogDescription[]) {
  const acc = {};

  // I bet this gets a bit gnarly if we are depositing a the same artifact multiple times
  events.forEach((e) => {
    if (e.name == "Deposit") {
      const artifactId: ArtifactId = artifactIdFromEthersBN(
        e.args[1] as EthersBN
      );
      //@ts-ignore
      acc[artifactId] = true;
    } else if (e.name == "Withdrawl") {
      const artifactId: ArtifactId = artifactIdFromEthersBN(
        e.args[1] as EthersBN
      );
      //@ts-ignore
      acc[artifactId] = false;
    }
  });
  //@ts-ignore
  return Object.keys(acc).filter((k) => acc[k]);
}

export const initializeContract = async () => {
  const DEPO_ADDRESS = "0xd8c00a439ac617f51e1f8fb58fa7f7334be56f63";
  const depo: Depo = await df.loadContract(DEPO_ADDRESS, DEPO_ABI);

  const eventHandlers = {
    ["Deposit"]: (addr: string, rawArtifactId: EthersBN) => {
      //@ts-ignore
      df.hardRefreshArtifact(
        artifactIdFromEthersBN(rawArtifactId) as ArtifactId
      );
      console.log(`${artifactIdFromEthersBN(rawArtifactId)} was deposited`);
    },
    ["Withdrawl"]: (addr: string, rawArtifactId: EthersBN) => {
      console.log(
        `artifact ${artifactIdFromEthersBN(rawArtifactId)} was withdrawn`
      );
    },
    ["Promote"]: (promotor: string, promoted: string) => {
      console.log(`${promoted} was promoted`);
    },
  };
  const ethConnection = df.getEthConnection();
  const filters = {
    address: DEPO_ADDRESS,
    fromBlock: 20744965,
    toBlock: "latest",
    filters: [
      depo.filters.Deposit(null, null).topics,
      depo.filters.Withdrawl(null, null).topics,
      depo.filters.Promote(null, null).topics,
    ],
  };

  const initialState = await df
    .getEthConnection()
    .getProvider()
    .getLogs(filters)
    .then((logs) => {
      return logs.map((log) => depo.interface.parseLog(log));
    })
    .then(initializeState);

  ethConnection.subscribeToContractEvents(depo, eventHandlers, filters);
  const core: DarkForest = df.getContract();

  //@ts-ignore
  window.depoContract = depo;
  return {
    state: initialState,
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
    onWithdraw: () => {},
    onDeposit: () => {},
  };
};
