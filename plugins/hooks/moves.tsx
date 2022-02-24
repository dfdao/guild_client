import { BigNumber } from "ethers";
import { List } from "immutable";
import { useCallback, useContext, useReducer } from "preact/hooks";
import { ComponentChildren, JSX, createContext, h } from "preact";
import { useMothershipAccounts } from "./accounts";

export interface Move {
  id: number;
  account: string;
  fromLocationId: string;
  toLocationId: string;
  artifactId: string;
  energy: number;
}

interface State {
  moves: List<Move>;
}

interface AddMove {
  type: "addMove";
  move: Move;
}

interface RemoveMove {
  type: "removeMove";
  id: number;
}

type Action = AddMove | RemoveMove;

function movesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addMove": {
      const move = {
        ...action.move,
        id: state.moves.size + 1,
      };
      return {
        ...state,
        moves: state.moves.push(move),
      };
    }
    case "removeMove": {
      return {
        ...state,
        moves: state.moves.filter((m) => m.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
}

interface AddMoveResult {
  error?: string;
}

interface UseMothershipMoves {
  addMove: (move: Move) => AddMoveResult;
  removeMove: (id: number) => void;
  moves: Move[];
}

const MothershipMovesContext = createContext<UseMothershipMoves>({
  addMove: (_move) => ({}),
  removeMove: (_id) => undefined,
  moves: [],
});

export function MothershipMovesProvider({ children }: { children: ComponentChildren }): JSX.Element {
  const { signers } = useMothershipAccounts();

  const [state, dispatch] = useReducer(movesReducer, {
    moves: List<Move>(),
  });

  const addMove = useCallback(
    (move: Move) => {
      const signer = signers.find((s) => s.address === move.account);
      if (!signer) {
        return { error: "account must be known" };
      }

      dispatch({ type: "addMove", move });

      return {};
    },
    [dispatch, signers]
  );

  const removeMove = useCallback(
    (id: number) => {
      dispatch({ type: "removeMove", id });
    },
    [dispatch]
  );

  return (
    <MothershipMovesContext.Provider value={{ addMove, removeMove, moves: state.moves.toArray() }}>
      {children}
    </MothershipMovesContext.Provider>
  );
}

export function useMothershipMoves(): UseMothershipMoves {
  return useContext(MothershipMovesContext);
}
