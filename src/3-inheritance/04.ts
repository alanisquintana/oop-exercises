// Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor.

class Vehicle {
    brand: string
    model: string

    constructor(brand: string, model: string) {
        this.brand = brand
        this.model = model
    }
}

class Car extends Vehicle {
    constructor(brand: string, model: string) {
        super(brand, model)
    }
}

class SportsCar extends Car{
    constructor(brand: string, model: string) {
        super(brand, model)
    }
}

const mySportsCar = new SportsCar("Ferrari", "F8 Tributo")
console.log(`My sports car is a ${mySportsCar.model} from ${mySportsCar.brand}.`)
