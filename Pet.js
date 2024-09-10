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
    console.log(`${this.name} says "Hi-ho diggety!!"`);
  }
}

class Cat extends Pet {
  constructor(name, age) {
    super(name, age);
  }
  meow() {
    console.log(`${this.name} says "Bee-yoo-tee-ful!"`);
  }
}

const dog = new Dog("CatDog", 4);
const cat = new Cat("CatDog", 3);

console.log(welcomeMessage);

dog.bark();
cat.meow();
