//@ts-ignore
import fastq from "https://cdn.skypack.dev/fastq";

function isValidUrl(url: string) {
  if (!url) return false;
  // if malformed url return
  try {
    new URL(url);
  } catch (_) {
    return false;
  }
  return true;
}

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
        //@ts-ignore
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
  if (!isValidUrl(url)) return;

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
          //@ts-ignore
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
  async render(div: HTMLElement) {
    div.style.width = "400px";
    const firstTextDiv = document.createElement("div");
    firstTextDiv.innerText = "Input the url to your remote snarker below";
    const input = document.createElement("input");
    input.style.color = "black";
    input.style.width = "100%";
    input.placeholder = "https://snark.1fa90.xyz";
    input.value = "https://snark.1fa90.xyz";
    const button = document.createElement("button");
    button.innerHTML = "Start Remote Snarker";
    const status = document.createElement("p");
    button.onclick = () => {
      if (isValidUrl(input.value)) {
        patchSnarkProverQueue(input.value);
        status.innerHTML = "running";
        status.style.color = "green";
      } else {
        status.innerHTML = "Not valid URL";
        status.style.color = "red";
      }
    };
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexFlow = "row";
    row.style.justifyContent = "space-between";
    row.appendChild(button);
    row.appendChild(status);
    div.appendChild(firstTextDiv);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(row);
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
