export const Stepper = (
  options: {min: string, max: string, step: string, value: string },
  onChange: ((this: GlobalEventHandlers, ev: Event) => any) | null,
) => {
  let stepperLabel = document.createElement("label");
  stepperLabel.style.display = "block";
  let stepper = document.createElement("input");
  stepper.type = "range";
  stepper.min = options.min;
  stepper.max = options.max;
  stepper.step = options.step;
  stepper.value = options.value;
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

export const Select = (
  options: { value: string, label: string }[],
  onChange: ((this: GlobalEventHandlers, ev: Event) => any) | null
) => { 
  var div = document.createElement("div");
  var x = document.createElement("SELECT");
  x.id = 'myselect';
  div.appendChild(x);

  options.forEach(o => {
    var z = document.createElement("option");
    z.value = o.value;
    var t = document.createTextNode(o.label);
    z.appendChild(t);
    x.appendChild(z);
  })
  
  x.onchange = (evt: Event) => {
    // @ts-ignore
    onChange(evt.target.value);
  };
  return div;
};