import { h, JSX } from "preact";
import type { FlashbotsResult } from "../hooks/flashbots";

export function FlashbotsStatus({ status }: { status: FlashbotsResult }): JSX.Element {
  let inner;
  if (status.status === "submitting") {
    inner = <span>Submitting</span>;
  } else {
    let text;
    if (status.status === "block_passed_without_inclusion") {
      text = "NO INCL";
    } else if (status.status === "included") {
      text = "INCL!!!";
    } else if (status.status === "nonce_too_high") {
      text = "NONCE";
    } else if (status.status === "skip") {
      text = "SKIP";
    } else if (status.status === "submitted") {
      text = "SUBMT";
    } else {
      text = "UNKNOWN";
    }
    inner = (
      <span>
        {status.targetBlock} - {text}
      </span>
    );
  }
  return <div>{inner}</div>;
}
