import { h, JSX } from "preact";
import { useCallback, useState } from "preact/hooks";
import { useMothershipAccounts } from "../hooks/accounts";
import { actionRowStyle, inputStyle, baseInputStyle, errorStyle } from "./styles";

export function AccountsManager(): JSX.Element {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState<string | undefined>();

  const { signers, addAccount, removeAccount } = useMothershipAccounts();

  const addAccountWithSecret = useCallback(() => {
    setError(undefined);
    if (secret) {
      const { error: signerError } = addAccount(secret);
      if (signerError) {
        setError(signerError);
      } else {
        setSecret("");
      }
    }
  }, [secret, addAccount]);

  return (
    <div>
      <p style={{ fontSize: 28 }}>Account Manager</p>
      <div>
        {signers.map((signer, index) => (
          <div style={actionRowStyle} key={signer.address}>
            <div>{signer.address}</div>
            <button onClick={() => removeAccount(index)}>x</button>
          </div>
        ))}
      </div>
      <div style={actionRowStyle}>
        <input
          placeholder="secret key"
          value={secret}
          // @ts-expect-error
          onChange={(evt) => setSecret(evt.target?.value)}
          style={{ ...inputStyle, flexGrow: 1 }}
        />
        <button onClick={addAccountWithSecret} style={baseInputStyle}>
          Add account
        </button>
      </div>
      <div>{error && <p style={errorStyle}>{error}</p>}</div>
    </div>
  );
}
