const getElement = (id) => {
  return document.getElementById(id);
};

const jumpText = () => {
  const str = getElement("heading").innerHTML;
  const texts = [...str];
  let htmlString = "";
  for (let i of texts) {
    htmlString += `<span>${i}</span>`;
  }
  getElement("heading").innerHTML = htmlString;
  return htmlString;
};

jumpText();
