import { h, render } from "preact";
import { MissionControlAdminView } from "./views/MissionControlAdminView";

export default class MissionControlAdminPlugin {
  container: HTMLDivElement | null;

  constructor() {
    this.container = null;
  }

  async render(container: HTMLDivElement): Promise<void> {
    this.container = container;
    this.container.style.width = '800px';
    render(<MissionControlAdminView />, container);
  }

  destroy(): void {
    if (this.container) {
      render(null, this.container);
    }
  }
}
