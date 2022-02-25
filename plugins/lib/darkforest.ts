import type { WorldCoords } from "@darkforest_eth/types";
import { BigNumber, BigNumberish } from "ethers";

export interface CanvasCoords {
  x: number;
  y: number;
}

export interface Viewport {
  canvas: HTMLCanvasElement;
  canvasToWorldCoords(canvasCoords: CanvasCoords): WorldCoords;
  worldToCanvasCoords(worldCoords: WorldCoords): CanvasCoords;
  worldToCanvasDist(d: number): number;
  canvasToWorldDist(d: number): number;
  worldToCanvasX(x: number): number;
  worldToCanvasY(y: number): number;
  canvasToWorldX(x: number): number;
  canvasToWorldY(y: number): number;
}

export function getViewport(): Viewport {
  // @ts-expect-error
  return ui.getViewport();
}

export function getHoveringOverCoords(): WorldCoords | undefined {
  // @ts-expect-error
  return ui.getHoveringOverCoords();
}

export interface HashConfig {
  biomebaseKey: number;
  perlinLengthScale: number;
  perlinMirrorX: boolean;
  perlinMirrorY: boolean;
  planetHashKey: number;
  planetRarity: number;
  spaceTypeKey: number;
}

export function getHashConfig(): HashConfig {
  // @ts-expect-error
  return df.getHashConfig();
}

export interface Move {
  txHash: string
  oldLocationId: BigNumber;
  newLocationId: BigNumber;
  population: BigNumber;
  silver: BigNumber;
  artifactId: BigNumber;
}

export interface UpgradePlanet {
  txHash: string
  locationId: BigNumber;
  branch: BigNumberish;
}

export interface InvadePlanet {
  txHash: string
  locationId: BigNumber;
}

export interface CapturePlanet {
  txHash: string
  locationId: BigNumber;
}

export interface ActivateArtifact {
  txHash: string
  locationId: BigNumber;
  artifactId: BigNumber;
  wormholeTo: BigNumber;
}

export interface ProspectPlanet {
  txHash: string
  locationId: BigNumber;
}