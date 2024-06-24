//Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.

class Bus {
    brand: string
    model: string
    year: number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

const myBus = new Bus("Mercedes", "McLaren", 2018)

console.log(`Bus details:`)
console.log(`Brand: ${myBus.brand}`)
console.log(`Model: ${myBus.model}`)