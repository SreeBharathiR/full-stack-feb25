const headingElement = document.getElementById("heading");
console.log(headingElement);
console.log(headingElement.textContent);
headingElement.innerHTML = "<a href>Today Session</a>";
headingElement.style.color = "red";
