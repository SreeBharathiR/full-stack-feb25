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
  // console.log(paraElement);
  divContainer.appendChild(paraElement);
  headingElement.style.color = "blue";
});

const increBtn = document.getElementsByTagName("button")[1];
const countPara = document.getElementById("para");
// console.log(increBtn);

increBtn.addEventListener("click", () => {
  countPara.textContent = Number(countPara.textContent) + 1;
});

const inField = document.getElementById("inField");
const typedText = document.getElementById("typedText");
// console.log(inField);
inField.addEventListener("keyup", () => {
  console.log(inField.value);
  typedText.textContent = inField.value;
});

const form = document.querySelector("#form");
const nameField = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    let error = false;
    if (nameField.value.trim() !== "") {
    } else {
      error = true;
      console.log("Name is required");
    }
    if (password.value.trim() !== "") {
    } else {
      error = true;
      console.log("Password is required");
    }
    if (confirmPass.value.trim() !== "") {
    } else {
      error = true;
      console.log("Confirm password is required");
    }
    if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
      console.log("Invalid format");
    }
    if (
      password.value &&
      confirmPass.value &&
      password.value !== confirmPass.value
    ) {
      error = true;
      console.log("Password & confirm password does not match");
    }
    if (!error) {
      console.log("submitted");
    }
  } catch (error) {
    console.log("Error occurs");
  }
});

const a = 10.0;
console.log(a / 0);
