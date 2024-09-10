class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return "Some sound";
    }
}

const doSomething = new Pet();

console.log(doSomething.speak());