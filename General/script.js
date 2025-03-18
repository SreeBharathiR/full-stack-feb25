console.log("Good evening");
function greet() {
  console.log("Welcome everyone!");
}
const id = setTimeout(greet, 10000);
console.log(id);
clearTimeout(id);

// let count = 0;
// const inverId = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 10) clearInterval(inverId);
// }, 1000);

let user = { name: "Sree", id: 45 };
localStorage.setItem("user", JSON.stringify(user));

let getLocal = JSON.parse(localStorage.getItem("user"));
console.log(getLocal);
