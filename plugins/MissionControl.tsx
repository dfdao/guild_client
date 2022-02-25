import type { WorldCoords, WorldLocation } from "@darkforest_eth/types";
import { perlin, PerlinConfig } from "@darkforest_eth/hashing";
import { locationIdFromBigInt } from "@darkforest_eth/serde";
import { h, render } from "preact";
import { getHashConfig, getViewport, Viewport } from "./lib/darkforest";
import { BASE_URL } from "./lib/missioncontrol"

import { MissionControlView } from "./views/MissionControlView";

const MAGENTA = "#d445f7";
const CYAN = "#59c0f8";

function chunkFilter(chunk: ChunkRect) {
  const bottomLeft = chunk.bottomLeft;
  const upperRight = chunk.upperRight;
  return `bottom_left[x]=${bottomLeft.x}&bottom_left[y]=${bottomLeft.y}&upper_right[x]=${upperRight.x}&upper_right[y]=${upperRight.y}`;
}

interface ChunkRect {
  bottomLeft: WorldCoords;
  upperRight: WorldCoords;
}

interface RemoteChunk {
  bottom_left: WorldCoords;
  size: number;
}

interface DfRectangle {
  bottomLeft: WorldCoords;
  sideLength: number;
}

interface DfChunk {
  chunkFootprint: DfRectangle;
  planetLocations: WorldLocation[];
  perlin: number;
}

// See miner.worker.ts
function processChunkWithPlanets(
  chunkWithPlanets: any,
  spaceTypePerlinOpts: PerlinConfig,
  biomebasePerlinOpts: PerlinConfig
): DfChunk {
  const { chunk, planets } = chunkWithPlanets;

  const chunkFootprint: DfRectangle = {
    bottomLeft: {
      x: chunk.bottom_left.x,
      y: chunk.bottom_left.y,
    },
    sideLength: chunk.size,
  };

  const chunkCenter = {
    x: chunkFootprint.bottomLeft.x + chunkFootprint.sideLength / 2,
    y: chunkFootprint.bottomLeft.y + chunkFootprint.sideLength / 2,
  };

  const planetLocations = planets.map((planet: any) => ({
    coords: planet.location,
    hash: locationIdFromBigInt(planet.hash),
    perlin: perlin(planet.location, spaceTypePerlinOpts),
    biomebase: perlin(planet.location, biomebasePerlinOpts),
  }));

  return {
    chunkFootprint,
    planetLocations,
    perlin: perlin(chunkCenter, { ...spaceTypePerlinOpts, floor: false }),
  };
}

export default class MissionControlPlugin {
  container: HTMLDivElement | null;
  viewport: Viewport;
  chunk: ChunkRect | null;
  remoteChunks: RemoteChunk[];

  constructor() {
    this.container = null;
    this.viewport = getViewport();
    this.chunk = null;
    this.remoteChunks = [];
  }

  onChunkSelected(bottomLeft: WorldCoords, upperRight: WorldCoords) {
    this.chunk = { bottomLeft, upperRight };
  }

  onChunkClear() {
    console.log("clear");
    this.chunk = null;
  }

  async onFetchData() {
    if (!this.chunk) return;
    const response = await fetch(`${BASE_URL}/api/chunks?${chunkFilter(this.chunk)}`);
    const { data, errors } = await response.json();
    if (errors) {
      console.error(errors);
      return;
    }

    const newChunks: RemoteChunk[] = data.map((rc: any) => {
      return rc.chunk;
    });

    this.remoteChunks = [...this.remoteChunks, ...newChunks]
  }

  onClearRemoteChunks() {
    this.remoteChunks = [];
  }

  async onFetchPlanets() {
    if (!this.chunk) return;
    const response = await fetch(`${BASE_URL}/api/planets?${chunkFilter(this.chunk)}`);
    const { data, errors } = await response.json();
    if (errors) {
      console.error(errors);
      return;
    }

    const hashConfig = getHashConfig();

    const spaceTypePerlinOpts: PerlinConfig = {
      key: hashConfig.spaceTypeKey,
      scale: hashConfig.perlinLengthScale,
      mirrorX: hashConfig.perlinMirrorX,
      mirrorY: hashConfig.perlinMirrorY,
      floor: true,
    };

    const biomebasePerlinOpts: PerlinConfig = {
      key: hashConfig.biomebaseKey,
      scale: hashConfig.perlinLengthScale,
      mirrorX: hashConfig.perlinMirrorX,
      mirrorY: hashConfig.perlinMirrorY,
      floor: true,
    };

    const newChunks = data.map((cp: any) => processChunkWithPlanets(cp, spaceTypePerlinOpts, biomebasePerlinOpts));

    try {
      // @ts-expect-error
      await df.bulkAddNewChunks(newChunks);
    } catch (err) {
      console.error(err);
    }
  }

  async render(container: HTMLDivElement): Promise<void> {
    this.container = container;
    container.style.width = "500px";
    render(
      <MissionControlView
        onChunkSelected={(bl, ur) => this.onChunkSelected(bl, ur)}
        onChunkClear={() => this.onChunkClear()}
        onFetchData={() => this.onFetchData()}
        onClearRemoteChunks={() => this.onClearRemoteChunks()}
        onFetchPlanets={() => this.onFetchPlanets()}
      />,
      container
    );
  }

  drawRectangle(ctx: CanvasRenderingContext2D, bottomLeft: WorldCoords, upperRight: WorldCoords, color: string) {
    const { x: bx, y: by } = bottomLeft;
    const { x: ux, y: uy } = upperRight;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeRect(
      this.viewport.worldToCanvasX(bx),
      this.viewport.worldToCanvasY(by),
      this.viewport.worldToCanvasDist(ux - bx),
      this.viewport.worldToCanvasDist(by - uy)
    );
    ctx.restore();
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.chunk) {
      this.drawRectangle(ctx, this.chunk.bottomLeft, this.chunk.upperRight, MAGENTA);
    }

    this.remoteChunks.forEach((chunk) => {
      const upperRight = {
        x: chunk.bottom_left.x + chunk.size,
        y: chunk.bottom_left.y + chunk.size,
      };
      this.drawRectangle(ctx, chunk.bottom_left, upperRight, CYAN);
    });
  }

  destroy(): void {
    if (this.container) {
      render(null, this.container);
    }
  }
}
