// function greet(name) {
//   return {
//     name,
//     welcome() {
//       console.log(`welcome ${name}`);
//     },
//   };
// }
// const user = greet("ragul");
// console.log(user);
// user.welcome();

// function Person(name, age) {
//   this.personName = name;
//   this.age = age;
// }

// const person1 = new Person("Hari", 26);
// const person2 = new Person("manoj", 23);

// Person.prototype.Eat = function () {
//   console.log(`${this.personName} Eating`);
// };
// person1.location = "salem";
// console.log(person2);
// console.log(person1);
// person2.Eat();

// class Person {
//   #password;
//   constructor(name, age, password) {
//     this.name = name;
//     this.age = age;
//     this.#password = password;
//   }
//   talk() {
//     console.log(`${this.name} taking`);
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
// }
// const person1 = new Person("Hari", 26, "dataPassword");
// const person2 = new Person("manoj", 23);
// Person.prototype.Eat = () => {
//   console.log(`${this.name} Eating`);
// };

// console.log(person2);
// console.log(person1.#password);
// person2.talk();
// console.log(person1.getName());
// person1.setName("vignesh");
// console.log(person1);

class Animal {
  animalCategory() {
    console.log("This is a animal");
  }
}
class Dog extends Animal {
  animalCategory() {
    super.animalCategory();
    console.log("This is a dog");
  }
  eat() {
    console.log("veg & non-veg");
  }
}
class Cat extends Dog {
  sound() {
    console.log("miow");
  }
}

const dog = new Dog();
dog.animalCategory();
const cat = new Cat();
// console.log(cat.animalCategory());
