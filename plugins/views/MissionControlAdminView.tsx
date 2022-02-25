import { h, JSX } from "preact";
import { useEffect, useState, useCallback } from "preact/hooks";

import { addMiner, Miner, updateMinerHome, useMiners } from "../lib/missioncontrol";

function MinerRow({ miner }: { miner: Miner }): JSX.Element {
  const [targeting, setTargeting] = useState(false);
  const target = () => setTargeting(true);

  useEffect(() => {
    const hover = () => {
      // @ts-expect-error
      const coords = ui.getHoveringOverCoords();
      if (coords) {
        // @ts-expect-error
        ui?.setExtraMinerLocation?.(miner.id, coords);
      }
    };
    const click = () => {
      window.removeEventListener("mousemove", hover);
      window.removeEventListener("click", click);
      // @ts-expect-error
      const coords = ui.getHoveringOverCoords();
      if (coords) {
        updateMinerHome(miner.id, coords).catch(console.error)
      }
      setTargeting(false)
    };
    if (targeting) {
      window.addEventListener("mousemove", hover);
      window.addEventListener("click", click);
    }

    return () => {
      window.removeEventListener("mousemove", hover);
      window.removeEventListener("click", click);
    };
  }, [targeting, miner]);

  return (
    <tr>
      <td>{miner.url}</td>
      <td>{miner.comment}</td>
      <td>
        ({miner.home.x}, {miner.home.y})
      </td>
      <td>
          <button onClick={target}>Change Home</button>
      </td>
    </tr>
  );
}

export function MissionControlAdminView(): JSX.Element {
  const [minersLoaded, setMinersLoaded] = useState(false);

  const { loading, error, refresh, miners } = useMiners();

  const [nextUrl, setNextUrl] = useState("");
  const [nextComment, setNextComment] = useState("");

  const onUrlInputChange = useCallback((evt: any) => {
    setNextUrl(evt.target.value);
  }, []);

  const onCommentInputChange = useCallback((evt: any) => {
    setNextComment(evt.target.value);
  }, []);

  const onAddMiner = useCallback(() => {
    if (nextUrl.length > 0 && nextComment.length > 0) {
      addMiner(nextUrl, nextComment).then((_miner) => refresh());
    }
  }, [refresh, nextUrl, nextComment]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Miner List</p>
        <div>
          {loading && "Loading..."}
          <button onClick={refresh}>Refresh</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Url</th>
            <th>Comment</th>
            <th>Home</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {miners.map((m) => (
            <MinerRow miner={m} />
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
        <input value={nextUrl} onChange={onUrlInputChange} placeholder="URL" />
        <input value={nextComment} onChange={onCommentInputChange} placeholder="Comment" />
        <button onClick={onAddMiner}>Add</button>
      </div>
      <p>Both fields are required</p>
    </div>
  );
}
