// const { add, name } = require("./new.js");
import add from "./new.js";
import { name, obj } from "./new.js";
console.log(add);

console.log("Hi");
let n = 2;
let m = 3;
add(n, m);
console.log(name);
const { id, ...otherdetails } = obj;
console.log(id);
console.log(otherdetails);

// const age = () => {
//   setTimeout(() => {
//     console.log("27");
//   }, 3000);
// };
// age();

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const total = [...arr1, ...arr2];
// console.log(total);
