import { Artifact, ArtifactType } from "@darkforest_eth/types";
//@ts-ignore
import { initializeContract } from "./depo/lib";
import { Button } from "./views/basics";
type Pane = "withdraw" | "deposit" | "loading";

const isNotShip = (artifact: Artifact) => {
  return artifact.artifactType < 10;
};
const isInWallet = (artifact: Artifact) => {
  return !artifact.onPlanetId;
};

class Plugin {
  container: HTMLDivElement | undefined;

  PaneController: HTMLDivElement;
  PaneParent: HTMLDivElement;
  DepositPane: HTMLDivElement;
  WithdrawPane: HTMLDivElement;
  pane: Pane = "loading";
  constructor() {
    this.PaneController = document.createElement("div");
    this.PaneParent = document.createElement("div");
    this.DepositPane = document.createElement("div");
    this.WithdrawPane = document.createElement("div");
    initializeContract();
  }
  async initialize() {
    await initializeContract();
    this.togglePane("deposit");
  }

  togglePane(pane: Pane) {
    this.pane = pane;
    this.setPaneParentContent();
  }

  setPaneControllerContent() {
    this.PaneController!.innerHTML = "";
    this.PaneController?.append(
      Button("Deposit", () => {
        this.togglePane("deposit");
      })
    );
    this.PaneController?.append(
      Button("Withdraw", () => {
        this.togglePane("withdraw");
      })
    );
  }
  setPaneParentContent() {
    this.PaneParent.childNodes.forEach((n) => this.PaneParent.removeChild(n));
    if (this.pane == "deposit") {
      this.PaneParent.append(this.DepositPane);
    } else {
      this.PaneParent.append(this.WithdrawPane);
    }
  }
  getArtifactDepositRow(artifact: Artifact): HTMLDivElement {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";

    row.append(
      (document.createElement("text").innerHTML = `${artifact.artifactType}`)
    );
    row.append(Button("deposit me", () => {}));
    return row;
  }

  setDepositPaneContent() {
    const myArtifacts = df
      .getMyArtifacts()
      .filter(isNotShip)
      .filter(isInWallet);
    if (myArtifacts.length === 0) {
      this.DepositPane.innerText = "NO ARTIFACTS TO DEPOSIT";
    } else {
      myArtifacts
        .map(this.getArtifactDepositRow)
        .forEach((r) => this.DepositPane.append(r));
    }
  }
  setWithdrawPaneContent() {
    this.WithdrawPane.innerText = "Withdraw";
  }

  /**
   * Called when plugin is launched with the "run" button.
   */
  async render(container: HTMLDivElement) {
    this.container = container;
    container.style.width = "380px";
    this.setPaneControllerContent();
    this.setPaneParentContent();
    this.setDepositPaneContent();
    this.setWithdrawPaneContent();
    container.append(this.PaneController!);
    container.append(this.PaneParent!);
    // df.getMyArtifacts().filter((a: Artifact) => );
  }

  /**
   * Called when plugin modal is closed.
   */
  destroy() {}
}

/**
 * And don't forget to export it!
 */
export default Plugin;
