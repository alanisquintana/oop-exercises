// Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.

import { Car } from "./02";

class Suv extends Car {
    offroad: boolean

    constructor(brand: string, model: string, year: number, offroad: boolean) {
        super(brand, model, year)
        this.offroad = offroad
    }

    canOffRoad() {
        if (this.offroad) {
            console.log("This vehicle is capable of driving off road.");
            return
        }
        console.log("This vehicle is not suitable for off road driving.");
    }
}

const mySuv = new Suv("Jeep", "H2", 2009, true)
mySuv.canOffRoad()