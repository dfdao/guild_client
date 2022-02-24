import { h, JSX } from "preact";
import { useArtifactName, usePlanetName } from "../hooks/darkforest";
import { Move, useMothershipMoves } from "../hooks/moves";

function MoveRow({ move }: { move: Move }) {
  const { name: fromPlanet } = usePlanetName(move.fromLocationId);
  const { name: toPlanet } = usePlanetName(move.toLocationId);
  const { name: artifact } = useArtifactName(move.artifactId);
  return (
    <tr>
      <td>{move.account.slice(0, 10)}</td>
      <td>{fromPlanet}</td>
      <td>{toPlanet}</td>
      <td>{artifact}</td>
      <td>{move.energy / 1000}</td>
    </tr>
  );
}

export function MovesList(): JSX.Element {
  const { moves } = useMothershipMoves();
  return (
    <div>
      <p style={{ fontSize: 20 }}>Bundle Moves</p>
      <table style={{ width: "100%" }}>
        <thead style={{ borderBottom: "1px solid #eaeaea" }}>
          <tr>
            <th>Account</th>
            <th>From Planet</th>
            <th>To Planet</th>
            <th>Artifact</th>
            <th>Energy</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <MoveRow key={move.id} move={move} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
