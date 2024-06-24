"use strict";
class Bus {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const myBus = new Bus("Mercedes", "McLaren", 2018);
console.log(`Bus details:`);
console.log(`Brand: ${myBus.brand}`);
console.log(`Model: ${myBus.model}`);
