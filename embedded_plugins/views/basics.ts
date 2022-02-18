export const Stepper = (
  onChange: ((this: GlobalEventHandlers, ev: Event) => any) | null,
  min = "0",
  max = "9"
) => {
  let stepperLabel = document.createElement("label");
  stepperLabel.style.display = "block";
  let stepper = document.createElement("input");
  stepper.type = "range";
  stepper.min = min;
  stepper.max = max;
  stepper.step = "1";
  stepper.value = "2";
  stepper.style.width = "50%";
  stepper.style.height = "24px";
  let stepperValue = document.createElement("span");
  stepperValue.innerText = `${stepper.value}`;
  stepperValue.style.float = "right";
  stepper.onchange = (evt: Event) => {
    // @ts-ignore
    stepperValue.innerText = `${evt.target.value}`;
    // @ts-ignore
    onChange(evt.target.value);
  };
  return stepper;
};

export const Button = (
  innerHTML: string,
  onClick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null
) => {
  let button = document.createElement("button");
  button.style.marginBottom = "10px";
  button.innerHTML = innerHTML;
  button.onclick = onClick;
  return button;
};

export const Text = (innerHTML: string) => {
  let text = document.createElement("p");
  text.innerHTML = innerHTML;
  return text;
};
export const LineBreak = () => document.createElement("br");
