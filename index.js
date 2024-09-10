class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return "Some sound";
    }
}

class Cat extends Pet {
    speak() {
        return `Meow! im ${this.name} and i have ${this.age} years old`;
    }
}

class Dog extends Pet {
    speak() {
        return `Woof! im ${this.name} and i have ${this.age} years old`;
    }
}

const doSomething = new Pet();
const cat = new Cat("Mia", 2);
const dog = new Dog("Fido", 3);

console.log( cat.speak());