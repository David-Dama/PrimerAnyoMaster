import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

const addOptionsToColorPicker = () => {
  const select = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    select.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const select = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");

  select.addEventListener("change", (event) => {
    const newColor = event.target.value;

    document.body.style.backgroundColor = newColor;

    const text = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? text : "-";
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
