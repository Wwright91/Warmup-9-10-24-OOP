class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return 'Some sound';
  }
}

class Dog extends Pet {
  speak() {
    return 'Woof';
  }
}

class Cat extends Pet {
  speak() {
    return 'Meow';
  }
}

const pet = new Pet('test', 1);
console.log(pet.speak());

const cat = new Cat('mittens', 3);
console.log(cat.speak());
