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

const dog = new Pet("CatDog", 4);
const cat = new Pet("CatDog", 4);

console.log(welcomeMessage);
dog.speak(`${dog.name} says "Hi-ho diggety!!"`);
cat.speak(`${dog.name} says "Bee-yoo-tee-ful!"`);
