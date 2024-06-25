"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`This ${this.model}, made by ${this.brand}, from ${this.year} is on road!`);
    }
}
exports.Car = Car;
const myCar = new Car("Chevrolet", "Onix", 2016);
myCar.start();
