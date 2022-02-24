import {
  FlashbotsBundleProvider,
  FlashbotsBundleResolution,
  FlashbotsBundleTransaction,
  FlashbotsTransaction,
} from "@flashbots/ethers-provider-bundle";
import { List, Repeat } from "immutable";
import { Wallet } from "ethers";
import { getProvider } from "./darkforest";
import { useState } from "preact/hooks";

export interface FlashbotsResultSubmitting {
  status: "submitting";
}

export interface FlashbotsResultSubmitted {
  status: "submitted";
  targetBlock: number;
  transaction: FlashbotsTransaction;
}

export interface FlashbotsResultIncluded {
  status: "included";
  targetBlock: number;
  transaction: FlashbotsTransaction;
}

export interface FlashbotsResultBlockPassedWithoutInclusion {
  status: "block_passed_without_inclusion";
  targetBlock: number;
  transaction: FlashbotsTransaction;
}

export interface FlashbotsResultNonceTooHigh {
  status: "nonce_too_high";
  targetBlock: number;
  transaction: FlashbotsTransaction;
}

export interface FlashbotsResultSkip {
  status: "skip";
  targetBlock: number;
  transaction: FlashbotsTransaction;
}

export type FlashbotsResult =
  | FlashbotsResultSubmitting
  | FlashbotsResultSubmitted
  | FlashbotsResultIncluded
  | FlashbotsResultBlockPassedWithoutInclusion
  | FlashbotsResultNonceTooHigh
  | FlashbotsResultSkip;

interface Flashbots {
  submitBundle: (transactions: FlashbotsBundleTransaction[]) => Promise<void>;
  bundles: FlashbotsResult[];
  clear: () => void;
  submitting: boolean;
  completed: boolean;
  error?: string;
}

interface FlashbotsArgs {
  blocks?: number;
  onComplete?: () => void;
}

export function useFlashbotsBundle({ onComplete, blocks = 20 }: FlashbotsArgs = {}): Flashbots {
  const provider = getProvider();
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [bundles, setBundles] = useState<FlashbotsResult[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const clear = () => {
    setError(undefined);
    setSubmitting(false);
    setBundles([]);
  };

  const setErrorAndComplete = (error: string) => {
    setError(error);
    onComplete && onComplete();
  };

  const submitBundle = async (transactions: FlashbotsBundleTransaction[]) => {
    clear();
    setSubmitting(true);
    const initState: FlashbotsResultSubmitting = { status: "submitting" };
    setBundles(Repeat(initState, blocks).toArray());

    const authSigner = Wallet.createRandom();
    let flashbotsProvider;
    try {
      flashbotsProvider = await FlashbotsBundleProvider.create(
        provider,
        authSigner,
        "https://xdai-relay.nethermind.io/"
      );
    } catch (err) {
      console.error(err);
      return setErrorAndComplete("Could not create Flashbots bundle provider");
    }

    let signedTransactions;
    try {
      signedTransactions = await flashbotsProvider.signBundle(transactions);
    } catch (err) {
      console.error(err);
      return setErrorAndComplete("Could not sign bundle");
    }

    let currentBlock;
    try {
      currentBlock = await provider.getBlockNumber();
    } catch (err) {
      console.error(err);
      return setErrorAndComplete("Could not get current block");
    }

    const newBundles = [];
    for (let i = 0; i < blocks; i++) {
      const targetBlock = currentBlock + i;
      try {
        const bundleSubmission = await flashbotsProvider.sendRawBundle(signedTransactions, targetBlock);
        const localStatus: FlashbotsResult = {
          status: "submitted",
          targetBlock,
          transaction: bundleSubmission,
        };
        newBundles.push(localStatus);
      } catch (err) {
        console.error(err);
        return setErrorAndComplete("Could not send bundle");
      }
    }
    setBundles(newBundles);

    // check status of submissions
    let immutableBundles: List<FlashbotsResult> = List.of(...newBundles);
    let included = false;
    for (let i = 0; i < blocks; i++) {
      const localStatus = immutableBundles.get(i);
      console.log(`Checking status ${i}`, localStatus);
      if (included) {
        if (localStatus && localStatus.status != "submitting") {
          const newLocalStatus: FlashbotsResult = {
            status: "skip",
            targetBlock: localStatus.targetBlock,
            transaction: localStatus.transaction,
          };
          if (newLocalStatus) {
            immutableBundles = immutableBundles.set(i, newLocalStatus);
            setBundles(immutableBundles.toArray());
          }
        }
      } else {
        if (localStatus?.status === "submitted") {
          try {
            // TODO(fra): how to handle this error?
            if ("error" in localStatus.transaction) {
              continue;
            }

            const response = await localStatus.transaction.wait();
            console.log(`Response ${FlashbotsBundleResolution[response]} ${localStatus.targetBlock}`);
            let newLocalStatus: FlashbotsResult | undefined;
            if (response == FlashbotsBundleResolution.AccountNonceTooHigh) {
              newLocalStatus = {
                status: "nonce_too_high",
                targetBlock: localStatus.targetBlock,
                transaction: localStatus.transaction,
              };
            } else if (response == FlashbotsBundleResolution.BlockPassedWithoutInclusion) {
              newLocalStatus = {
                status: "block_passed_without_inclusion",
                targetBlock: localStatus.targetBlock,
                transaction: localStatus.transaction,
              };
            } else {
              included = true;
              newLocalStatus = {
                status: "included",
                targetBlock: localStatus.targetBlock,
                transaction: localStatus.transaction,
              };
            }

            if (newLocalStatus) {
              immutableBundles = immutableBundles.set(i, newLocalStatus);
              setBundles(immutableBundles.toArray());
            }
          } catch (err) {
            console.error(err);
            return setErrorAndComplete("Could not await bundle result");
          }
        }
      }
    }

    setCompleted(true);
    onComplete && onComplete();
  };

  return {
    submitBundle,
    clear,
    bundles,
    submitting,
    completed,
    error,
  };
}
