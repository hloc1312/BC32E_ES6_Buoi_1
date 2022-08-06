// hàm selector
const selectorQuery = (id) => {
  return document.querySelector(id);
};
// mảng màu
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const listButton = (arr) => {
  var htmlString = "";
  for (let item of arr) {
    if (item === "pallet") {
      htmlString = `
    <button onclick= "changeColor('${item}')" class="color-button ${item} active" id="${item}"></button> 
    `;
    } else {
      htmlString += `
        <button onclick= "changeColor('${item}')" class="color-button ${item}" id="${item}"></button> 
        `;
    }
  }
  selectorQuery("#colorContainer").innerHTML = htmlString;
  return htmlString;
};

listButton(colorList);

let changeColor = function (color) {
  for (value of colorList) {
    let removeActive = document.querySelector(`.color-button.${value} `);
    removeActive.classList.remove("active");
    if (value === color) {
      const colorValue = value;
      let element = document.getElementById("house");
      element.className = "house" + " " + colorValue;
      let addActive = document.getElementById(colorValue);
      addActive.classList.add("active");
    }
  }
};
