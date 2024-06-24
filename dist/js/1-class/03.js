"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_1 = require("./02");
class Suv extends _02_1.Car {
    offroad;
    constructor(brand, model, year, offroad) {
        super(brand, model, year);
        this.offroad = offroad;
    }
    canOffRoad() {
        if (this.offroad) {
            console.log("This vehicle is capable of driving off road.");
            return;
        }
        console.log("This vehicle is not suitable for off road driving.");
    }
}
const mySuv = new Suv("Jeep", "H2", 2009, true);
mySuv.canOffRoad();
