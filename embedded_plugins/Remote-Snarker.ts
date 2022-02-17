import fastq from "fastq";

function isMoveSnarkInput(snarkInput: any) {
  return snarkInput?.x1 && snarkInput?.x2 && snarkInput?.y1 && snarkInput?.y2;
}

function replaceOldProverQueue() {
  //@ts-ignore
  df.snarkHelper.snarkProverQueue.taskQueue = fastq(
    async function remoteSnarkerExecute(
      task: any,
      cb: (err: Error | null, result: any | null) => void
    ) {
      try {
        let res = await window.snarkjs.groth16.fullProve(
          task.input,
          task.circuit,
          task.zkey
        );
        console.log(`proved ${task.taskId}`);
        cb(null, res);
      } catch (e) {
        console.error("error while calculating SNARK proof:");
        console.error(e);
        cb(e, null);
      }
    },
    1
  );
}

function patchSnarkProverQueue(url: string) {
  // If no url return
  if (!url) return;
  // if malformed url return
  try {
    new URL(url);
  } catch (_) {
    return;
  }
  // TODO: ping server and double check it returns expected home string

  //@ts-ignore
  df.snarkHelper.snarkProverQueue.taskQueue = fastq(
    async function remoteSnarkerExecute(
      task: any,
      cb: (err: Error | null, result: any | null) => void
    ) {
      try {
        let res;
        if (isMoveSnarkInput(task.input)) {
          let proverResponse = await fetch(`${url}/move`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(task.input),
          });
          res = await proverResponse.json();
        } else {
          res = await window.snarkjs.groth16.fullProve(
            task.input,
            task.circuit,
            task.zkey
          );
        }
        console.log(`proved ${task.taskId}`);
        cb(null, res);
      } catch (e) {
        console.error("YOU SHOULD PROBABLY CLOSE YOUR REMOTE SNARKER PLUGIN");
        console.error("error while calculating SNARK proof:");
        console.error(e);
        cb(e, null);
      }
    },
    1
  );
}

class Snarker {
  /**
   * A constructor can be used to keep track of information.
   */
  constructor() {}
  /**
   * A plugin's render function is called once.
   * Here, you can insert custom html into a game modal.
   * You render any sort of UI that makes sense for the plugin!
   */
  async render(div: HTMLDivElement) {
    div.style.width = "400px";
    const firstTextDiv = document.createElement("div");
    firstTextDiv.innerText =
      "this is the simplified Remote Snarker " +
      "add the your snarker url below.";
    const input = document.createElement("input");
    input.style.width = "100%";
    input.placeholder = "https://snarker.orden.gg";
    const button = document.createElement("button");
    button.innerHTML = "Start Remote Snarker";
    button.onclick = () => {
      patchSnarkProverQueue(input.value);
    };
    div.appendChild(firstTextDiv);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(button);
  }
  /**
   * When this is unloaded, the game calls the destroy method.
   * So you can clean up everything nicely!
   */
  destroy() {
    replaceOldProverQueue();
  }
}
/**
 * For the game to know about your plugin, you must export it!
 *
 * Use `export default` to expose your plugin Class.
 */
export default Snarker;
