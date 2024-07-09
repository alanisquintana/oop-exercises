// Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each animal makes.

abstract class Animals {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract makeSound(): string
}

class Lion extends Animals {
    constructor(name: string) {
        super(name)
    }

    makeSound(): string {
        return 'Roar'
    }
}

const myLion = new Lion('Simba')

console.log(`The lion ${myLion.name} says: ${myLion.makeSound()}.`);
