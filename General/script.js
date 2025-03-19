// console.log("Good evening");
// function greet() {
//   console.log("Welcome everyone!");
// }
// const id = setTimeout(greet, 10000);
// console.log(id);
// clearTimeout(id);

// let count = 0;
// const inverId = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 10) clearInterval(inverId);
// }, 1000);

// let user = { name: "Sree", id: 45 };
// localStorage.setItem("user", JSON.stringify(user));

// let getLocal = JSON.parse(localStorage.getItem("user"));
// console.log(getLocal);

function add(a, b) {
  return function (b) {
    console.log(b);
    return function () {
      console.log("Hi");
    };
  };
}

const sum = add(5, 10);
const greet = sum(105);
// greet();
// console.log(greet);

// async function fetching() {
//   console.log("promise");
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 3000);
//   });
// }
// async function call() {
//   console.log("login clicked....");
//   const result = await fetching();
//   console.log(result);
// }
// call();
// console.log("Move to home page...");

function timeout(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("print");
      return resolve("yes");
    }, ms)
  );
}
async function sleep() {
  await timeout(3000);
  return;
}
console.log("take");

const fetchingData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/3");
  console.log(await response.json());
};
fetchingData();
