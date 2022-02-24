import { h, JSX } from "preact";
import { useCallback, useState } from "preact/hooks";
import { actionRowStyle, inputStyle, baseInputStyle, errorStyle } from "./styles";
import { getArtifactWithId, getEnergyNeededForMove, getPlanetWithId } from "../hooks/darkforest";
import { useMothershipAccounts } from "../hooks/accounts";
import { useMothershipMoves } from "../hooks/moves";

const formRowStyle = {
  ...actionRowStyle,
  margin: "10px 0",
};

export function MovesManager(): JSX.Element {
  const { signers } = useMothershipAccounts();
  const { addMove } = useMothershipMoves();
  const [account, setAccount] = useState("");
  const [fromLocationId, setFromLocationId] = useState("");
  const [toLocationId, setToLocationId] = useState("");
  const [artifactId, setArtifactId] = useState("");

  const [error, setError] = useState<string | undefined>();

  const validateAddMove = useCallback(() => {
    setError(undefined);

    const wallet = signers.find((s) => s.address === account);
    const fromPlanet = getPlanetWithId(fromLocationId);
    const toPlanet = getPlanetWithId(toLocationId);

    // const artifact = artifactId.length > 0 ? getArtifactWithId(artifactId) : undefined;
    const energy = Math.ceil(1.03 * getEnergyNeededForMove(fromLocationId, toLocationId, 0));

    if (wallet && fromPlanet && toPlanet) {
      const move = {
        id: 0,
        account: wallet.address,
        fromLocationId,
        toLocationId,
        artifactId: artifactId.length > 0 ? artifactId : undefined,
        energy,
      };
      const { error } = addMove(move);
      if (error) {
        setError(error);
      } else {
        setAccount("");
        setFromLocationId("");
        setToLocationId("");
        setArtifactId("");
      }
    } else {
      let error = "Invalid values ";
      if (!wallet) {
        error += ": wallet";
      }
      if (!fromPlanet) {
        error += ": from planet id";
      }
      if (!toPlanet) {
        error += ": to planet id";
      }
      /*
      if (!artifact) {
        error += ": artifact id";
      }
      */
      setError(error);
    }
  }, [account, fromLocationId, toLocationId, artifactId, setError, signers]);

  return (
    <div>
      <p style={{ fontSize: 28 }}>Moves</p>
      <div style={{ marginTop: "15px" }}>
        <p style={{ fontSize: 20 }}>Add Move</p>
        <p style={formRowStyle}>
          Account: <input value={account} onChange={(evt) => setAccount(evt.target?.value)} style={inputStyle} />
        </p>
        <p style={formRowStyle}>
          From Location Id:{" "}
          <input value={fromLocationId} onChange={(evt) => setFromLocationId(evt.target?.value)} style={inputStyle} />
        </p>
        <p style={formRowStyle}>
          To Location Id:{" "}
          <input value={toLocationId} onChange={(evt) => setToLocationId(evt.target?.value)} style={inputStyle} />
        </p>
        <p style={formRowStyle}>
          Artifact Id:{" "}
          <input value={artifactId} onChange={(evt) => setArtifactId(evt.target?.value)} style={inputStyle} />
        </p>
        <button onClick={validateAddMove} style={baseInputStyle}>
          Add Move
        </button>
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
}
