// console.log(20 + 45);
// let a = 10;
// let c = 50;

// {
//   const dineshLocation = "erode";
// }
// a = 20;
// console.log(a);
// console.log(typeof dineshLocation);

// console.log(typeof s);
// console.log(typeof false);
// console.log(typeof c);

// console.log(10 % 3);

// a=a+1;
// console.log(++a);
// console.log(a);

// Assignment operator

// let manoj = "107";
// let sathish = 106;
// let vignesh = 106;
// let total = manoj + manoj;

// console.log(total);
// manoj=manoj+3;
// manoj += manoj;

// console.log(manoj);

// console.log(sathish >= vignesh);

// console.log(1 === 1 || 1 < 0 || 1 == 3);

// console.log(!(1 > 1));

// if (manoj !== vignesh) {
//   // manoj += 5;
//   console.log("manoj and vignesh not roomates");
// } else if (sathish == vignesh) {
//   console.log("sathish & vignesh roomates");
// } else {
//   console.log("They are not a roomates");
// }

//switch case

// const movie = "leo";
const movie = "dragon";
const hero = "pradeep";
const actress = "Ivana";

// switch (movie) {
//   case "leo":
//     console.log("vijay");
//     break;
//   case "dragon":
//     console.log("pradeep");
//     break;
//   default:
//     console.log("Unable to identify the hero");
//     break;
// }

// if (movie === "dragon") {
//   console.log("Movie selected");
//   if (hero === "pradeep") {
//     console.log("Hero selected");
//     if (actress === "anupamma") {
//       console.log("Heroine selected");
//       console.log("All are selected, ready to realse");
//     } else {
//       console.log("Movie is not ready");
//     }
//   }
// }

// ternary oprator

// let a = 3;
// let b = 5;
// a > b ? console.log("A is greater") : console.log("B is greater");

//loops

// for (let i = 1; i < 100; i * 5) {
//   console.log(`JavaScript ${i}`);
// }

// let i = 1;
// while (i < 100) {
//   console.log(i);
//   // i = i - 3;
//   i = i * 5;
// }

// tables

// 1 X 2 = 2
// 2 X 2 = 4
// 3 X 2 = 6

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let num = 534;
// let result = "";

// for (let i = 0; i < num; i++) {
//   let reminder = num % 10;

//   result = result * 10 + reminder;

//   num = parseInt(num / 10);
// }
// console.log(result);
//4
// let reminder = 534 % 10;
// console.log(reminder);

//3
// num = parseInt(num / 10);
// console.log(num);

// result = reminder;

// reminder = num % 10;
// console.log(reminder);
// console.log(`result ${result}`);

// result = result * 10 + reminder;
// console.log(`result ${result}`);

//5
// num = parseInt(num / 10);

// reminder = num % 10;
// console.log(reminder);
// console.log(`result ${result}`);

// result = result * 10 + reminder;
// console.log(`result ${result}`);

//user-defined function
// console.log(Number("123"));
// function funcName() {
//   console.log("This is function");
// }

// funcName();

// function greeting(person) {
//   console.log(`Good evening ${person}`);
// }

// greeting("Sree");

// greeting("Bharathi");

// function sum(n1, n2) {
//   let add = n1 + n2;
//   return add;
// }

// function subtraction(n1, n2) {
//   if (n1 > n2) {
//     return n1 - n2;
//   } else {
//     return n2 - n1;
//   }
// }
// let total = sum(2, 4);
// console.log(total);

// console.log(subtraction(10, 15));

// let personName = "Sree Bharathi";
// personName = "Yuvan";
// console.log(personName);
// console.log(personName[2]);
// personName[2] = "t";
// console.log(personName);

// console.log(personName[3]);
// console.log(personName.charAt(-3));
// console.log(personName.at(-3));
// console.log(personName.indexOf("r"));

// console.log("?".charCodeAt());
// console.log(personName.split("|"));

// let firstName = personName.slice(-5, -1);
// console.log(firstName);
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());

// personName = personName + " Ramaraj";
// console.log(personName);

// let fullName = personName.concat(" Ramaraj");

// console.log(fullName);

// let changedName = personName.replaceAll("a", "A");
// console.log(changedName);
// console.log(personName);

// let personName = "Sree Bharathi";
// console.log(personName);
// let trimmedValue = personName.trimEnd();
// console.log(trimmedValue);

// console.log(personName.indexOf("e"));
// console.log(personName.lastIndexOf("e"));

// console.log(personName.includes("ara"));

// console.log(personName.startsWith("s"));

// console.log(personName.endsWith("the"));

//Array

//declaration

// let arrayName = new Array("sathish", "dinesh");
// let arrayName = ["sathish", "dinesh"];
// console.log(arrayName);

// arrayName.push("manoj");
// arrayName[3] = 100;
// console.log(arrayName);

// console.log(arrayName.length);
// console.log(arrayName.at(2));
// console.log(arrayName[2]);

// let array2 = [10, "hari", 100, 567];

// let totalArray = arrayName.join(array2);
// console.log(totalArray);

// console.log(arrayName.concat(array2, "54"));

//spread
// const totalNew = [...arrayName, ...array2];
// console.log(totalNew);

// let last = totalNew.pop();
// console.log(last);
// console.log(totalNew);

// totalNew.shift();
// console.log(totalNew);

// totalNew.unshift("ragul");
// console.log(totalNew);

// const sliced = totalNew.slice(0, 3);
// console.log(sliced.toString());
// console.log(totalNew);

// const splicedArr = totalNew.splice(
//   2,
//   4,
//   "New",
//   "items",
//   "vignesh",
//   "kumar",
//   "vijay"
// );
// console.log(splicedArr);
// console.log(totalNew);

// console.log(totalNew.indexOf(100));
// console.log(totalNew.lastIndexOf(100));

// console.log(totalNew.includes("dinesh"));

// let arr = [10, 7, 30, 50, 5, 4, 100, -2];

// function sorting(array) {
//   console.log(array);
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// let newArr = sorting(arr);
// console.log(newArr);
// newArr = sorting(arr);
// console.log(newArr);

//console.log(arr.sort((a, b) => b - a)); //check and ref

// arr.forEach((value, i) => {
//   console.log(`${i} : value ${value}`);
// });

// let newArr = arr.map((value) => {
//   if (value % 2 == 0) {
//     return value * 2;
//   } else {
//     return value;
//   }
// });
// console.log(arr);
// console.log(newArr);

// const filteredArr = arr.filter((value) => value % 2 !== 0);
// console.log(filteredArr);

// array

// const evenNumArray = arr.some((value) => value === 100);
// console.log(evenNumArray);

// const sumFunc = (a, b) => {
//   return a + b;
// };

// console.log(sumFunc(2, 4));

//object

const ragulDetails = {
  name: "Ragulkanth",
  place: "Chennai",
  phno: 123456786,
  isStudent: true,
  favNum: [1, 15, 88],
  address: {
    state: "Tamil Nadu",
    country: "India",
    doorNo: 10,
  },
};

ragulDetails["email"] = "ragul@gmail.com";
ragulDetails.password = "ragul@123";
ragulDetails.password = "Ragul";
console.log(ragulDetails);

console.log(Object.entries(ragulDetails));
