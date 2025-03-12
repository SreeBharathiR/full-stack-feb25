const headingElement = document.getElementById("heading");
const divContainer = document.getElementById("container");
// console.log(headingElement);
// console.log(headingElement.textContent);
// headingElement.innerHTML = "<a href>Today Session</a>";
// headingElement.style.margin = "20px";

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const paraElement = document.createElement("p");
  paraElement.textContent = "Para Element";
  console.log(paraElement);
  divContainer.appendChild(paraElement);
  headingElement.style.color = "blue";
});

const increBtn = document.getElementsByTagName("button")[1];
const countPara = document.getElementById("para");
console.log(increBtn);

increBtn.addEventListener("click", () => {
  countPara.textContent = Number(countPara.textContent) + 1;
});

const inField = document.getElementById("inField");
const typedText = document.getElementById("typedText");
console.log(inField);
inField.addEventListener("keyup", () => {
  console.log(inField.value);
  typedText.textContent = inField.value;
});
