/* Write a TypeScript class called Car with the properties brand, model, and 
year. Add a method start() that prints a message indicating that the car is 
starting. */

export class Car {
    brand: string
    model: string
    year: number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    start(): void {
        console.log(`This ${this.model}, made by ${this.brand}, from ${this.year} is on road!`)
    }
}

const myCar = new Car("Chevrolet", "Onix", 2016)
myCar.start()
