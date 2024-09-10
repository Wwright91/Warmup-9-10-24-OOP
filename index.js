class Pet {
  static sound = 'some sound'
  static speak(sound) {
    return sound
  }
  
  constructor(name, age, sound) {
    this.name = name
    this.age = age
    this.sound = sound
    this.speak = Pet.speak(this.sound)
  }
}

const dog = new Pet('Fido', 3, 'woof')
const cat = new Pet('Garfield', 5, 'meow')

console.log(dog.speak)
console.log(cat.speak)
p