// Ants solution

// class Pet {
//   static sound = "Some sound"

//   static speak(sound) {
//     return sound
//   }

//   constructor(name, age, sound) {
//     this.name = name;
//     this.age = age;
//     this.sound = sound;
//     this.speak = Pet.speak(this.sound)
//   }
// }

// const dog = new Pet("Fido", 3, "Woof!")

// const cat = new Pet("Jack", 5, "Meow!")

// console.log(dog.speak)
// console.log(cat.speak)

// Parent class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

// method. we initially return "Some sound" because we want to override it in the subclasses
  speak() {
    return "Some sound"
  }
}

// Dog subclass
class Dog extends Pet {
  // override the speak method
  speak() {
    return "Woof!"
  }
}

// Cat subclass
class Cat extends Pet {
  // override the speak method
  speak() {
    return "Meow!"
  }
}

// new instance of dog class
const dog = new Dog("Ace", 10)
// new instance of cat class
const cat = new Cat("Bow Wow", 3)

console.log(dog.speak())
console.log(cat.speak())