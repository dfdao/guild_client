import { useCallback, useContext, useEffect, useReducer, useState } from "preact/hooks";
import { ethers } from "ethers";
import { List } from "immutable";
import { ComponentChildren, JSX, createContext, h } from "preact";

interface MothershipAccountsState {
  signers: List<ethers.Wallet>;
}

interface AddMothershipAccount {
  type: "addMothershipAccount";
  signer: ethers.Wallet;
}

interface RemoveMothershipAccount {
  type: "removeMothershipAccount";
  index: number;
}

type MothershipAccountsAction = AddMothershipAccount | RemoveMothershipAccount;

function mothershipAccountsReducer(
  state: MothershipAccountsState,
  action: MothershipAccountsAction
): MothershipAccountsState {
  switch (action.type) {
    case "addMothershipAccount": {
      // check if already exists
      const existing = state.signers.find((s) => s.address === action.signer.address);
      console.log("exs", existing);
      if (existing) {
        return state;
      }
      return {
        ...state,
        signers: state.signers.push(action.signer),
      };
    }
    case "removeMothershipAccount": {
      return {
        ...state,
        signers: state.signers.remove(action.index),
      };
    }
    default: {
      return state;
    }
  }
}

interface AddAccountResult {
  signer?: ethers.Signer;
  error?: string;
}

interface UseMothershipAccounts {
  addAccount: (secret: string) => AddAccountResult;
  removeAccount: (index: number) => void;
  signers: ethers.Wallet[];
}

const MothershipAccountsContext = createContext<UseMothershipAccounts>({
  addAccount: (_secret) => ({}),
  removeAccount: (_index) => undefined,
  signers: [],
});

export function MothershipAccountsProvider({ children }: { children: ComponentChildren }): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [state, dispatch] = useReducer(mothershipAccountsReducer, {
    signers: List<ethers.Wallet>(),
  });

  const addAccount = useCallback(
    (secret: string) => {
      try {
        const signer = new ethers.Wallet(secret);
        dispatch({ type: "addMothershipAccount", signer });
        const addr = signer.address;
        localStorage.setItem(`MOTHERSHIP_ADDRESS-${addr}`, secret);
        return { signer };
      } catch (err) {
        console.error(err);
        return { error: "Could not add account. See console log for information" };
      }
    },
    [dispatch]
  );

  const removeAccount = useCallback(
    (index: number) => {
      dispatch({ type: "removeMothershipAccount", index });
    },
    [dispatch]
  );

  useEffect(() => {
    if (!loaded) return;
    console.log("writing addresses to storage");
    const addresses = state.signers.toArray().map((w) => w.address);
    localStorage.setItem("MOTHERSHIP_ADDRESSES", JSON.stringify(addresses));
  }, [state.signers.size]);

  useEffect(() => {
    console.log("loading wallets from storage");
    const addressesSerialized = localStorage.getItem("MOTHERSHIP_ADDRESSES");
    const knownAddresses = [];
    if (addressesSerialized) {
      const addresses = JSON.parse(addressesSerialized) as string[];
      for (let addr of addresses) {
        knownAddresses.push(addr);
      }
    }

    for (let addr of knownAddresses) {
      console.log(`loading ${addr}`);
      const secret = localStorage.getItem(`MOTHERSHIP_ADDRESS-${addr}`);
      if (secret) {
        addAccount(secret);
      }
    }
    setLoaded(true);
  }, []);

  return (
    <MothershipAccountsContext.Provider value={{ signers: state.signers.toArray(), addAccount, removeAccount }}>
      {children}
    </MothershipAccountsContext.Provider>
  );
}

export function useMothershipAccounts(): UseMothershipAccounts {
  return useContext(MothershipAccountsContext);
}
