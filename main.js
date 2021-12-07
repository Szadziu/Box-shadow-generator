// selecting elements

const userPanel = document.querySelector(".main__user-panel");
const toolBox = document.querySelector(".main__tool-box");
const colorPicker = document.querySelector(".main__tool-box-color-picker");
const boxElement = document.querySelector(".main__preview-box-element");

const sliderOffsetX = document.querySelector(
  ".main__user-panel-slider-offsetX"
);
const sliderOffsetY = document.querySelector(
  ".main__user-panel-slider-offsetY"
);
const sliderSpread = document.querySelector(".main__user-panel-slider-spread");
const sliderBlur = document.querySelector(".main__user-panel-slider-blur");
const sliderOpacity = document.querySelector(
  ".main__user-panel-slider-opacity"
);

const sliderOffsetXOutput = document.querySelector(
  ".main__user-panel-slider-output-offsetX"
);
const sliderOffsetYOutput = document.querySelector(
  ".main__user-panel-slider-output-offsetY"
);
const sliderSpreadOutput = document.querySelector(
  ".main__user-panel-slider-output-spread"
);
const sliderBlurOutput = document.querySelector(
  ".main__user-panel-slider-output-blur"
);
const sliderOpacityOutput = document.querySelector(
  ".main__user-panel-slider-output-opacity"
);

let offsetX = 0;
let offsetY = 10;
let spread = 0;
let blur = 0;
let opacity = 0;

sliderOffsetXOutput.innerHTML = sliderOffsetX.value;
sliderOffsetX.oninput = function () {
  sliderOffsetXOutput.innerHTML = this.value;
  offsetX = this.value;
  boxElement.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px black`;
};

sliderOffsetYOutput.innerHTML = sliderOffsetY.value;
sliderOffsetY.oninput = function () {
  sliderOffsetYOutput.innerHTML = this.value;
  offsetY = this.value;
  boxElement.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px black`;
};

sliderBlurOutput.innerHTML = sliderBlur.value;
sliderBlur.oninput = function () {
  sliderBlurOutput.innerHTML = this.value;
  blur = this.value;
  boxElement.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px black`;
};

sliderSpreadOutput.innerHTML = sliderSpread.value;
sliderSpread.oninput = function () {
  sliderSpreadOutput.innerHTML = this.value;
  spread = this.value;
  boxElement.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px black`;
};

sliderOpacityOutput.innerHTML = sliderOpacity.value;
sliderOpacity.oninput = function () {
  sliderOpacityOutput.innerHTML = this.value;
  opacity = this.value;
  boxElement.style.opacity = this.value;
};

colorPicker = function () {
  boxElement.style.backgroundColor = this.value;
};
