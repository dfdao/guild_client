import { h, JSX } from "preact";
import { useCallback, useState } from "preact/hooks";
import { useMothershipAccounts } from "../hooks/accounts";
import { useMothershipMoves } from "../hooks/moves";
import { createMoveTransaction, getContract, getProvider } from "../hooks/darkforest";
import { ethers, Wallet } from "ethers";
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";
import { baseInputStyle } from "./styles";

export function SubmitBundle(): JSX.Element {
  const { signers } = useMothershipAccounts();
  const { moves } = useMothershipMoves();

  const submitBundles = useCallback(async () => {
    const provider = getProvider();
    const authSigner = Wallet.createRandom();
    const flashbotProvider = await FlashbotsBundleProvider.create(
      provider,
      authSigner,
      "https://xdai-relay.nethermind.io/"
    );

    // build moves
    const nonces = new Map<string, number>();
    const wallets = new Map<string, ethers.Wallet>();
    for (let wallet of signers) {
      const nonce = await wallet.connect(provider).getTransactionCount();
      nonces.set(wallet.address, nonce);
      wallets.set(wallet.address, wallet);
    }

    console.log(signers);
    console.log(moves);
    for (let move of moves) {
      console.log("preparing move ", move);
      const nonce = nonces.get(move.account);
      const wallet = wallets.get(move.account);
      if (!nonce || !wallet) {
        console.error("missing nonce or wallet", move);
        return;
      }

      const tx = await createMoveTransaction(wallet, move.fromLocationId, move.toLocationId, move.artifactId, nonce);
      console.log(tx);

      nonces.set(move.account, nonce + 1);
    }
  }, [signers, moves]);

  return (
    <div>
      <button onClick={submitBundles} style={baseInputStyle}>
        Submit
      </button>
    </div>
  );
}
