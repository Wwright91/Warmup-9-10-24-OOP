class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      return "Some sound";
    }
  }
  
  // Subclass Dog
  class Dog extends Pet {
    speak() {
      return "Woof!";
    }
  }
  
  // Subclass Cat
  class Cat extends Pet {
    speak() {
      return "Meow!";
    }
  }
  
  // Testing the Classes
  const myDog = new Dog("Buddy", 3);
  console.log(`${myDog.name} says: ${myDog.speak()}`);  // Output: Buddy says: Woof!
  
  const myCat = new Cat("Whiskers", 2);
  console.log(`${myCat.name} says: ${myCat.speak()}`);  // Output: Whiskers says: Meow!
  