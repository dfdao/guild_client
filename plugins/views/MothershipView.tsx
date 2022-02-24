import { h, JSX } from "preact";
import { AccountsManager } from "../components/AccountsManager";
import { MovesManager } from "../components/MovesManager";
import { MovesList } from "../components/MovesList";
import { baseInputStyle } from "../components/styles";
import { MothershipAccountsProvider } from "../hooks/accounts";
import { MothershipMovesProvider } from "../hooks/moves";
import { SubmitBundle } from "../components/SubmitBundle";
import { useState } from "preact/hooks";

const separatorStyle = {
  borderBottom: "1px solid #eaeaea",
  margin: "15px 0px",
};

type FormPage = "input" | "review";

export function MothershipView(): JSX.Element {
  const [page, setPage] = useState<FormPage>("input");

  return (
    <MothershipAccountsProvider>
      <MothershipMovesProvider>
        {page === "input" ? (
          <div>
            <AccountsManager />
            <div style={separatorStyle} />
            <MovesManager />
            <MovesList />
            <div style={separatorStyle} />
            <button onClick={() => setPage("review")} style={baseInputStyle}>
              Review and Submit Bundle
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => setPage("input")} style={baseInputStyle}>
              Back
            </button>
            <MovesList />
            <SubmitBundle />
          </div>
        )}
      </MothershipMovesProvider>
    </MothershipAccountsProvider>
  );
}
