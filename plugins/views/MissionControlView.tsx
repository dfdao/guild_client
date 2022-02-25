import type { WorldCoords } from "@darkforest_eth/types";
import { h, JSX } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { getHoveringOverCoords, getViewport } from "../lib/darkforest";

type SelectionStatus = "none" | "first" | "second";

export function MissionControlView({
  onChunkSelected,
  onChunkClear,
  onFetchData,
  onFetchPlanets,
  onClearRemoteChunks,
}: {
  onChunkSelected: (bottomLeft: WorldCoords, upperRight: WorldCoords) => void;
  onChunkClear: () => void;
  onFetchData: () => void;
  onFetchPlanets: () => void;
  onClearRemoteChunks: () => void;
}): JSX.Element {
  const [selectionStatus, setSelectionStatus] = useState<SelectionStatus>("none");
  const [firstPoint, setFirstPoint] = useState<WorldCoords | undefined>(undefined);
  const [secondPoint, setSecondPoint] = useState<WorldCoords | undefined>(undefined);

  const onMouseClick = useCallback(
    (evt: MouseEvent) => {
      if (selectionStatus == "none") return;
      const viewport = getViewport();
      if (evt.target !== viewport.canvas) return;
      const coords = getHoveringOverCoords();
      if (!coords) return;
      if (selectionStatus == "first") {
        setFirstPoint(coords);
        setSelectionStatus("second");
      } else if (selectionStatus == "second") {
        setSecondPoint(coords);
        setSelectionStatus("none");
      }
    },
    [selectionStatus, setSelectionStatus]
  );

  const reset = useCallback(() => {
    setFirstPoint(undefined);
    setSecondPoint(undefined);
    setSelectionStatus("none");
    onChunkClear();
  }, []);

  useEffect(() => {
    window.addEventListener("click", onMouseClick);
    return () => {
      window.removeEventListener("click", onMouseClick);
    };
  }, [onMouseClick]);

  useEffect(() => {
    if (firstPoint && secondPoint) {
      // order points nicely
      const bx = Math.min(firstPoint.x, secondPoint.x);
      const by = Math.min(firstPoint.y, secondPoint.y);
      const ux = Math.max(firstPoint.x, secondPoint.x);
      const uy = Math.max(firstPoint.y, secondPoint.y);

      onChunkSelected({ x: bx, y: by }, { x: ux, y: uy });
    }
  }, [firstPoint, secondPoint]);

  return (
    <div>
      <p>Don't fetch chunks too big in one go!</p>
      <p>PREVIEW AVAILABLE CHUNKS</p>
      <p>1. Select area</p>
      <div>
        <button onClick={() => setSelectionStatus("first")}>
          {selectionStatus !== "none" ? "Selecting Area" : "Select Area"}
        </button>
        <button onClick={reset}>CLEAR</button>
        {firstPoint && `(${firstPoint.x}, ${firstPoint.y})`} - {secondPoint && `(${secondPoint.x}, ${secondPoint.y})`}
      </div>
      <p>2. Fetch available chunks from mission control</p>
      <div>
        <button onClick={onFetchData}>FETCH DATA</button>
        <button onClick={onClearRemoteChunks}>CLEAR REMOTE CHUNKS</button>
      </div>
      <p>3. Now fetch planets in the same area</p>
      <div>
        <button onClick={onFetchPlanets}>FETCH PLANETS</button>
      </div>
    </div>
  );
}
