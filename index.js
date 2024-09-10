class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      return "Some sound";
    }
  }

  class Dog extends Pet {
    speak() {
      return "Woof!";
    }
  }

  class Cat extends Pet {
    speak() {
      return "Meow!";
    }
  }

  const myDog = new Dog("Buddy", 3);
  console.log(`${myDog.name} says: ${myDog.speak()}`);
  
  const myCat = new Cat("Whiskers", 2);
  console.log(`${myCat.name} says: ${myCat.speak()}`);
  