import type { Artifact, Planet, WorldLocation } from "@darkforest_eth/types";
import { getPlanetName, artifactName } from "@darkforest_eth/procedural";
import { useEffect, useMemo, useState } from "preact/hooks";
import type { MoveSnarkContractCallArgs } from "@darkforest_eth/snarks";
import type { ContractTransaction, ethers, PopulatedTransaction, Transaction } from "ethers";
import type { DarkForest } from "@darkforest_eth/contracts/typechain";
import { CONTRACT_PRECISION } from "@darkforest_eth/constants";
import { artifactIdToDecStr } from "@darkforest_eth/serde";

export function getPlanetWithId(id: string): Planet | undefined {
  // @ts-expect-error
  return df.getPlanetWithId(id);
}

export function getLocationOfPlanet(id: string): WorldLocation | undefined {
  // @ts-expect-error
  return df.getLocationOfPlanet(id);
}

export function getArtifactWithId(id: string): Artifact | undefined {
  // @ts-expect-error
  return df.getArtifactWithId(id);
}

export function getProvider(): ethers.providers.JsonRpcProvider {
  // @ts-expect-error
  return df.getEthConnection().provider;
}

export function getContract(): DarkForest {
  // @ts-expect-error
  return df.getContract();
}

export function getEnergyNeededForMove(fromId: string, toId: string, arrivingEnergy: number): number {
  // @ts-expect-error
  return df.getEnergyNeededForMove(fromId, toId, arrivingEnergy);
}

interface SnarkArgsHelper {
  getMoveArgs(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
    r: number,
    distMax: number
  ): Promise<MoveSnarkContractCallArgs>;
}

export function getSnarkHelper(): SnarkArgsHelper {
  // @ts-expect-error
  return df.getSnarkHelper();
}

export const enum ZKArgIdx {
  PROOF_A,
  PROOF_B,
  PROOF_C,
  DATA,
}

export const enum MoveArgIdxs {
  FROM_ID,
  TO_ID,
  TO_PERLIN,
  TO_RADIUS,
  DIST_MAX,
  PLANETHASH_KEY,
  SPACETYPE_KEY,
  PERLIN_LENGTH_SCALE,
  PERLIN_MIRROR_X,
  PERLIN_MIRROR_Y,
  SHIPS_SENT,
  SILVER_SENT,
  ARTIFACT_SENT,
}

export type MoveArgs = [
  [string, string], // proofA
  [
    // proofB
    [string, string],
    [string, string]
  ],
  [string, string], // proofC
  [
    string, // from locationID (BigInt)
    string, // to locationID (BigInt)
    string, // perlin at to
    string, // radius at to
    string, // distMax
    string, // planetHashKey
    string, // spaceTypeKey
    string, // perlin lengthscale
    string, // perlin xmirror (1 true, 0 false)
    string, // perlin ymirror (1 true, 0 false)
    string, // ships sent
    string, // silver sent
    string, // artifactId sent
    string // is planet being released (1 true, 0 false)
  ]
];

export async function createMoveTransaction(
  provider: ethers.Signer,
  from: string,
  to: string,
  artifactId: string,
  nonce: number
): Promise<ContractTransaction | undefined> {
  const energy = getEnergyNeededForMove(from, to, 0);
  const oldLocation = getLocationOfPlanet(from);
  const newLocation = getLocationOfPlanet(to);

  console.log("move ", oldLocation, newLocation);
  if (!oldLocation || !newLocation) {
    return;
  }

  const oldX = oldLocation.coords.x;
  const oldY = oldLocation.coords.y;
  const newX = newLocation.coords.x;
  const newY = newLocation.coords.y;
  const xDiff = newX - oldX;
  const yDiff = newY - oldY;

  const distMax = Math.ceil(Math.sqrt(xDiff ** 2 + yDiff ** 2));

  // @ts-expect-error
  const worldRadius = df.worldRadius;
  const snarkArgs = await getSnarkHelper().getMoveArgs(oldX, oldY, newX, newY, worldRadius, distMax);
  console.log(snarkArgs);

  const args: MoveArgs = [
    snarkArgs[ZKArgIdx.PROOF_A],
    snarkArgs[ZKArgIdx.PROOF_B],
    snarkArgs[ZKArgIdx.PROOF_C],
    [
      ...snarkArgs[ZKArgIdx.DATA],
      (energy * CONTRACT_PRECISION).toString(),
      (0 * CONTRACT_PRECISION).toString(),
      "0",
      "0",
    ],
  ] as MoveArgs;

  // @ts-expect-error
  args[ZKArgIdx.DATA][MoveArgIdxs.ARTIFACT_SENT] = artifactIdToDecStr(artifactId);

  console.log("args", args);
  const contract = getContract().connect(provider);
  const tx = await contract.move(args[0], args[1], args[2], args[3], {
    nonce,
    gasLimit: 5000000,
  });
  return tx;
}

export function usePlanet(id: string | undefined): { planet?: Planet } {
  return useMemo(() => {
    if (id) {
      const planet = getPlanetWithId(id);
      return { planet };
    } else {
      return {};
    }
  }, [id]);
}

export function usePlanetName(id: string | undefined): { name?: string } {
  const { planet } = usePlanet(id);
  return useMemo(() => {
    if (planet) {
      const name = getPlanetName(planet);
      return { name };
    } else {
      return {};
    }
  }, [planet]);
}

export function useArtifact(id: string | undefined): { artifact?: Artifact } {
  return useMemo(() => {
    if (id) {
      const artifact = getArtifactWithId(id);
      return { artifact };
    } else {
      return {};
    }
  }, [id]);
}

export function useArtifactName(id: string | undefined): { name?: string } {
  const { artifact } = useArtifact(id);
  return useMemo(() => {
    if (artifact) {
      const name = artifactName(artifact);
      return { name };
    } else {
      return {};
    }
  }, [artifact]);
}
