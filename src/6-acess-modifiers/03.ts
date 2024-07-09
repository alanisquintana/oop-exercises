/* 
Write a TypeScript program that creates a class called Airplane with the following properties and methods:
    protected make: string
    protected model: string
The class should have a constructor that accepts make and model. Implement a method:
    public getAirplaneInfo(): string that returns a string containing the make and model of the Airplane.
Make sure that the make and model properties are only accessible within the class and its subclasses.
*/

class Airplane {
    protected brand: string
    protected model: string

    constructor(brand: string, model: string) {
        this.brand = brand
        this.model = model
    }

    public getAirplaneInfo(): string {
        return `Brand: ${this.brand}, Model: ${this.model}` 
    }
}

const myAirplane = new Airplane("Boeing", "Boeing 787 Dreamliner")
console.log(myAirplane.getAirplaneInfo())