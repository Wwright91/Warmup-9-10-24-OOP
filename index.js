class Pet {
  //constructor passing in name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //default response
  speak() {
    console.log(`woof`);
  }
}

class Dog extends Pet {
  // if class is Dog repond as follows:
  speak() {
    console.log(
      `Woof! My name is ${this.name} and I am ${this.age} yrs old. Woof!`
    );
  }
}

class Cat extends Pet {
  // if class is Cat respond as follows:
  speak() {
    console.log(
      `Meow! My name is ${this.name} and I am ${this.age} yrs old. Meow!`
    );
  }
}

//Testing
let dog = new Dog("Solin", 5);
let cat = new Cat("Whiskers", 2);

dog.speak();
cat.speak();
