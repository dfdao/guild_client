import { h, render } from "preact";

import { MothershipView } from "./views/MothershipView";

export default class MothershipPlugin {
  container: HTMLDivElement | undefined;

  constructor() {
    this.container = undefined;
  }

  async render(container: HTMLDivElement) {
    this.container = container;
    this.container.style.width = "800px";
    render(<MothershipView />, this.container);
  }

  destroy() {}

  draw(ctx: CanvasRenderingContext2D) {}
}
