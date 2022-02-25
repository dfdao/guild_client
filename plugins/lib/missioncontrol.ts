import type { WorldCoords } from "@darkforest_eth/types";
import { useEffect, useState, useCallback } from "preact/hooks";

export const BASE_URL = "https://mission-control-staging-y9nhq.ondigitalocean.app";

export interface Miner {
  id: number;
  url: string;
  comment: string;
  home: WorldCoords;
  size: number;
}

export async function fetchMiners(): Promise<Miner[]> {
  const response = await fetch(`${BASE_URL}/api/miners`);
  const { data } = await response.json();
  return data.map((m: any) => ({
    id: m.id,
    url: m.url,
    size: m.size,
    comment: m.comment,
    home: m.home,
  }));
}

export async function addMiner(url: string, comment: string): Promise<Miner> {
  const payload = {
    url,
    comment,
    home: {
      x: 0,
      y: 0,
    },
    pattern: "spiral",
    size: 512,
  };
  const response = await fetch(`${BASE_URL}/api/miners`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const { data } = await response.json();
  return data;
}

export async function updateMinerHome(minerId: number, home: string): Promise<Miner> {
  const payload = { home }
  const response = await fetch(`${BASE_URL}/api/miners/${minerId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const { data } = await response.json();
  return data;
}

export interface UseMiners {
  miners: Miner[];
  refresh: () => void;
  loading?: boolean;
  error?: string;
}

export function useMiners(): UseMiners {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [miners, setMiners] = useState<Miner[]>([]);

  const getMiners = useCallback(async () => {
    setLoading(true);
    try {
      const newMiners = await fetchMiners();
      if (newMiners) {
        setMiners(newMiners);
      }
    } catch (err) {
      console.error(err);
      setError("failed to fetch miners, check console");
    }
    setLoading(false);
  }, []);

  const refresh = useCallback(() => {
    getMiners();
  }, []);

  useEffect(() => {
    refresh();
  }, []);

  return { loading, refresh, error, miners };
}
