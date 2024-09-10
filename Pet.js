const { welcomeMessage } = require("./index.js");

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak(someSound) {
    console.log(someSound);
  }
}

class Dog extends Pet {
  constructor(name, age) {
    super(name, age);
  }
  bark() {
    console.log(`${this.name} says "Woof!"`);
  }
}

class Cat extends Pet {
  constructor(name, age) {
    super(name, age);
  }
  meow() {
    console.log(`${this.name} says "Meow!"`);
  }
}

const dog = new Dog("Buddy", 4);
const cat = new Cat("Whiskers", 3);

console.log(welcomeMessage);

dog.bark();
cat.meow();
