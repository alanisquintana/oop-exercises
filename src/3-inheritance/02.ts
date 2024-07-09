/* Write a TypeScript class called Person with properties name and age. 
Implement a constructor that initializes these properties when a Person object 
is created. Then, create a derived class Client that extends Person. Override 
the constructor of the Client class to include an additional property id. */

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Client extends Person {
    id: number

    constructor(name: string, age: number, id: number) {
        super(name, age)
        this.id = id
    }
}

const myClient = new Client('George', 27, 1)

console.log(myClient);
