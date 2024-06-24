"use strict";
class Engine {
    horsePower;
    fuelType;
    constructor(horsePower, fuelType) {
        this.horsePower = horsePower;
        this.fuelType = fuelType;
    }
}
class Truck {
    brand;
    model;
    year;
    engine;
    constructor(brand, model, year, engine) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    start() {
        console.log(`This ${this.model}, made by ${this.brand}, from ${this.year} is on road.`);
    }
    printTruckDetails() {
        console.log("Truck Details:");
        console.log("Brand: ", this.brand);
        console.log("Model: ", this.model);
        console.log("Year: ", this.year);
        console.log("Horse Power: ", this.engine.horsePower);
        console.log("Fuel Type: ", this.engine.fuelType);
    }
}
const myEngine = new Engine(750, "Diesel");
const myTruck = new Truck("Volvo", "FH16", 1993, myEngine);
myTruck.start();
myTruck.printTruckDetails();
