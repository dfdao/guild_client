import { DarkForest } from "@darkforest_eth/contracts/typechain";
import { BigNumber, ethers } from "ethers";
import { h, JSX } from "preact";
import { useCallback, useEffect, useReducer } from "preact/hooks";
import { ActivateArtifact, CapturePlanet, InvadePlanet, Move, ProspectPlanet, UpgradePlanet } from "../lib/darkforest";
import { List } from "immutable";
import { PlanetCell } from "../components/PlanetCell";

const titleStyle = {
  fontSize: 20,
};

const tableStyle = {
  width: "100%",
};

interface State {
  moves: List<Move>;
  upgrades: List<UpgradePlanet>;
  invades: List<InvadePlanet>;
  captures: List<CapturePlanet>;
  activates: List<ActivateArtifact>;
  prospects: List<ProspectPlanet>;
}

interface AddMove {
  type: "addMove";
  move: Move;
}

interface AddUpgrade {
  type: "addUpgrade";
  upgrade: UpgradePlanet;
}

interface AddInvade {
  type: "addInvade";
  invade: InvadePlanet;
}

interface AddCapture {
  type: "addCapture";
  capture: CapturePlanet;
}

interface AddActivate {
  type: "addActivate";
  activate: ActivateArtifact;
}

interface AddProspect {
  type: "addProspect";
  prospect: ProspectPlanet;
}

type Action = AddMove | AddUpgrade | AddInvade | AddCapture | AddActivate | AddProspect;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "addMove": {
      return {
        ...state,
        moves: state.moves.push(action.move).slice(-10),
      };
    }
    case "addUpgrade": {
      return {
        ...state,
        upgrades: state.upgrades.push(action.upgrade).slice(-10),
      };
    }
    case "addInvade": {
      return {
        ...state,
        invades: state.invades.push(action.invade).slice(-10),
      };
    }
    case "addCapture": {
      return {
        ...state,
        captures: state.captures.push(action.capture).slice(-10),
      };
    }
    case "addActivate": {
      return {
        ...state,
        activates: state.activates.push(action.activate).slice(-10),
      };
    }
    case "addProspect": {
      return {
        ...state,
        prospects: state.prospects.push(action.prospect).slice(-10),
      };
    }
    default: {
      return state;
    }
  }
}

export function SpyOnTargetView({
  provider,
  df,
}: {
  provider: ethers.providers.JsonRpcProvider;
  df: DarkForest;
}): JSX.Element {
  // orden_gg
  const target = "0x6d11551d33c7ef22e342049fec72028b83f6a92d";

  const [state, dispatch] = useReducer(reducer, {
    moves: List<Move>(),
    upgrades: List<UpgradePlanet>(),
    invades: List<InvadePlanet>(),
    captures: List<CapturePlanet>(),
    activates: List<ActivateArtifact>(),
    prospects: List<ProspectPlanet>(),
  });

  const handleTransaction = useCallback(
    (raw) => {
      if (raw.to.toLowerCase() != df.address) {
        return;
      }

      if (raw.from.toLowerCase() != target) {
          return
      }

      const tx = df.interface.parseTransaction(raw);

      switch (tx.name) {
        case "move": {
          const input = tx.args._input;
          const move = {
            txHash: raw.hash,
            oldLocationId: input[0],
            newLocationId: input[1],
            population: input[10],
            silver: input[11],
            artifactId: input[12],
          };
          dispatch({ type: "addMove", move });
          return;
        }
        case "upgradePlanet": {
          const upgrade = {
            txHash: raw.hash,
            locationId: tx.args._location,
            branch: tx.args._branch,
          };
          dispatch({ type: "addUpgrade", upgrade });
          return;
        }
        case "capturePlanet": {
          const capture = {
            txHash: raw.hash,
            locationId: tx.args.locationId,
          };
          dispatch({ type: "addCapture", capture });
          return;
        }
        case "invadePlanet": {
          const input = tx.args._input;
          const invade = {
            txHash: raw.hash,
            locationId: input[0],
          };
          dispatch({ type: "addInvade", invade });
          return;
        }
        case "activateArtifact": {
          const activate = {
            txHash: raw.hash,
            locationId: tx.args.locationId,
            artifactId: tx.args.artifact,
            wormholeTo: tx.args.wormholeTo,
          };
          dispatch({ type: "addActivate", activate });
          return;
        }
        case "prospectPlanet": {
          const prospect = {
            txHash: raw.hash,
            locationId: tx.args.locationId,
          };
          dispatch({ type: "addProspect", prospect });
          return;
        }
        default: {
          console.log("unhandled", tx);
          return;
        }
      }
    },
    [dispatch]
  );

  const subscribe = useCallback(() => {
    provider.on("pending", handleTransaction);
  }, [provider, handleTransaction]);

  const unsubscribe = useCallback(() => {
    provider.off("pending", handleTransaction);
  }, [provider, handleTransaction]);

  return (
    <div>
      <p>Target: {target}</p>
      <button onClick={subscribe}>Subscribe</button>
      <button onClick={unsubscribe}>Unsubscribe</button>
      <span>Don't forget to unsubscribe before closing the plugin</span>
      <div>
        <p style={titleStyle}>Move ({state.moves.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>from</th>
              <th>to</th>
              <th>population</th>
              <th>silver</th>
              <th>artifactId</th>
            </tr>
          </thead>
          <tbody>
            {state.moves.toArray().map((move) => (
              <tr key={move.txHash}>
                <td>
                  <PlanetCell locationId={move.oldLocationId} />
                </td>
                <td>
                  <PlanetCell locationId={move.newLocationId} />
                </td>
                <td>{move.population.toNumber() / 1000}</td>
                <td>{move.silver.toNumber() / 1000}</td>
                <td>{move.artifactId.toHexString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={titleStyle}>Planet Upgrade ({state.upgrades.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>location</th>
              <th>branch</th>
            </tr>
          </thead>
          <tbody>
            {state.upgrades.toArray().map((up) => (
              <tr key={up.txHash}>
                <td>
                  <PlanetCell locationId={up.locationId} />
                </td>
                <td>{BigNumber.from(up.branch).toHexString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={titleStyle}>Invade Planet ({state.invades.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {state.invades.toArray().map((inv) => (
              <tr key={inv.txHash}>
                <td>
                  <PlanetCell locationId={inv.locationId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={titleStyle}>Capture Planet ({state.captures.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {state.captures.toArray().map((cap) => (
              <tr key={cap.txHash}>
                <td>
                  <PlanetCell locationId={cap.locationId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={titleStyle}>Activate Artifact ({state.activates.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>location</th>
              <th>artifact</th>
              <th>wormhole to</th>
            </tr>
          </thead>
          <tbody>
            {state.activates.toArray().map((act) => (
              <tr key={act.txHash}>
                <td>
                  <PlanetCell locationId={act.locationId} />
                  <td>{BigNumber.from(act.artifactId).toHexString()}</td>
                  <PlanetCell locationId={act.wormholeTo} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={titleStyle}>Prospect Planet ({state.prospects.size})</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {state.prospects.toArray().map((pro) => (
              <tr key={pro.txHash}>
                <td>
                  <PlanetCell locationId={pro.locationId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
