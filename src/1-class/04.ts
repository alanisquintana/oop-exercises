// Write a TypeScript class that defines a base class Truck with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Truck class to include an instance of the Engine class as a property. Implement a method printTruckDetails() in the Truck class that prints both Truck and engine details.

class Engine {
    horsePower: number
    fuelType: string

    constructor(horsePower: number, fuelType: string) {
        this.horsePower = horsePower
        this.fuelType = fuelType
    }
}

class Truck {
    brand: string
    model: string
    year: number
    engine: Engine

    constructor(brand: string, model: string, year: number, engine: Engine) {
        this.brand = brand
        this.model = model
        this.year = year
        this.engine = engine
    }

    start(): void {
        console.log(`This ${this.model}, made by ${this.brand}, from ${this.year} is on road.`)
    }

    printTruckDetails(): void {
        console.log("Truck Details:")
        console.log("Brand: ", this.brand)
        console.log("Model: ", this.model)
        console.log("Year: ", this.year)
        console.log("Horse Power: ", this.engine.horsePower)
        console.log("Fuel Type: ", this.engine.fuelType)
    }
}

const myEngine = new Engine(750, "Diesel")
const myTruck = new Truck("Volvo", "FH16", 1993, myEngine)
myTruck.start()
myTruck.printTruckDetails()