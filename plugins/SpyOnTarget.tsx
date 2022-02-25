import { h, render } from "preact";
import { DarkForest } from "@darkforest_eth/contracts/typechain";
import { ethers } from "ethers";
import { SpyOnTargetView } from "./views/SpyOnTargetView";

export default class Plugin {
  container: HTMLDivElement | null;
  provider: ethers.providers.JsonRpcProvider;
  df: DarkForest;

  target: string;

  constructor() {
    this.container = null;
    // @ts-expect-error
    this.provider = df.getEthConnection().provider;
    // @ts-expect-error
    this.df = df.getContract();

  }

  async render(container) {
    this.container = container;
    container.style.width = "800px";
    render(<SpyOnTargetView provider={this.provider} df={this.df} />, this.container);
  }

  draw(ctx) {}

  destroy() {
  }
}
