import { useCallback, useContext, useReducer } from "preact/hooks";
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
  const [state, dispatch] = useReducer(mothershipAccountsReducer, {
    signers: List<ethers.Wallet>(),
  });

  const addAccount = useCallback(
    (secret: string) => {
      try {
        const signer = new ethers.Wallet(secret);
        dispatch({ type: "addMothershipAccount", signer });
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

  return (
    <MothershipAccountsContext.Provider value={{ signers: state.signers.toArray(), addAccount, removeAccount }}>
      {children}
    </MothershipAccountsContext.Provider>
  );
}

export function useMothershipAccounts(): UseMothershipAccounts {
  return useContext(MothershipAccountsContext);
}
