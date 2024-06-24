"use strict";
class Vehicle {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand, model);
    }
}
class SportsCar extends Car {
    constructor(brand, model) {
        super(brand, model);
    }
}
const mySportsCar = new SportsCar("Ferrari", "F8 Tributo");
console.log(`My sports car is a ${mySportsCar.model} from ${mySportsCar.brand}.`);
