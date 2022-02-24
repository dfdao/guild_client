import { h, JSX } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";
import { useMothershipAccounts } from "../hooks/accounts";
import { useMothershipMoves } from "../hooks/moves";
import { createMoveTransaction, getProvider } from "../hooks/darkforest";
import type { ethers } from "ethers";
import { baseInputStyle, errorStyle } from "./styles";
import { useFlashbotsBundle } from "../hooks/flashbots";
import { FlashbotsStatus } from "../components/FlashbotStatus";

export function SubmitBundle(): JSX.Element {
  const { signers } = useMothershipAccounts();
  const { moves } = useMothershipMoves();

  const { submitBundle, bundles, clear, submitting, completed, error } = useFlashbotsBundle();

  const submitBundles = useCallback(async () => {
    const provider = getProvider();

    // build moves
    const nonces = new Map<string, number>();
    const wallets = new Map<string, ethers.Wallet>();
    for (let wallet of signers) {
      const nonce = await wallet.connect(provider).getTransactionCount();
      nonces.set(wallet.address, nonce);
      wallets.set(wallet.address, wallet);
    }

    const bundle = [];
    for (let move of moves) {
      console.log("preparing move ", move);
      const nonce = nonces.get(move.account);
      const wallet = wallets.get(move.account);
      if (!nonce || !wallet) {
        console.error("missing nonce or wallet", move);
        return;
      }

      const rawTx = await createMoveTransaction(wallet, move.fromLocationId, move.toLocationId, move.artifactId, nonce);
      if (rawTx) {
        console.log(rawTx);
        const gasLimit = await provider.estimateGas(rawTx);
        const transaction = {
          to: rawTx.to,
          data: rawTx.data,
          nonce: nonce,
          gasLimit,
        };
        bundle.push({ transaction, signer: wallet });

        nonces.set(move.account, nonce + 1);
      } else {
        console.error("could not create move transaction");
      }
    }

    submitBundle(bundle);
  }, [signers, moves]);

  const bundlesContent = useMemo(() => {
    if (!submitting) {
      return <div></div>;
    }
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {bundles.map((bundle, index) => (
          <FlashbotsStatus key={index} status={bundle} />
        ))}
      </div>
    );
  }, [bundles, submitting]);

  return (
    <div>
      <button onClick={submitBundles} style={baseInputStyle}>
        Submit
      </button>
      {bundlesContent}
      {error && <p style={errorStyle}>{error}</p>}
      <button onClick={clear} style={baseInputStyle} disabled={!completed}>
        Clear
      </button>
    </div>
  );
}
