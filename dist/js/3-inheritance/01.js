"use strict";
class Animal {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}
class Tiger extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    roar() {
        console.log(`The tiger named ${this.name} from the species ${this.species} is roaring.`);
    }
}
const myTiger = new Tiger("Manson", "Bengal Tiger");
myTiger.roar();
