import { h, JSX } from "preact";
import { useState, useCallback } from "preact/hooks";
import { BigNumber } from "ethers";

import { errorStyle, inputStyle } from "./styles";

export function BigNumberInput({
  value,
  onChange,
}: {
  value: BigNumber;
  onChange: (value: BigNumber) => void;
}): JSX.Element {
  const [error, setError] = useState<string | undefined>();

  const validateBigNumber = useCallback(
    // @ts-expect-error
    (evt) => {
      try {
        let value: string = evt.target.value;
        if (!value.startsWith("0x")) {
          value = "0x" + value;
        }
        const bn = BigNumber.from(value);
        setError(undefined);
        onChange(bn);
      } catch (_err) {
        setError("invalid big number");
      }
    },
    [onChange]
  );

  return (
    <div style={{ width: "100%" }}>
      <input value={value.toHexString()} onChange={validateBigNumber} style={{ ...inputStyle, width: "100%" }} />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}
