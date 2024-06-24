"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Client extends Person {
    id;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
}
const myClient = new Client("Jane Doe", 24, 1);
console.log(`My Client data:`);
console.log(`Name: `, myClient.name);
console.log(`Age: `, myClient.age);
console.log(`Id: `, myClient.id);
