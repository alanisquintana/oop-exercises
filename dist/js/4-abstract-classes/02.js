"use strict";
class Animals {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Lion extends Animals {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Roar";
    }
}
const myLion = new Lion("Simba");
console.log(`The lion ${myLion.name} says: ${myLion.makeSound()}.`);
