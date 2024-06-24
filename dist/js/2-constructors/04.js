"use strict";
class Children {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 0) {
            this.age = 0;
            return;
        }
    }
}
const myChildren = new Children("Stefano", -1);
console.log(`My children ${myChildren.name} is ${myChildren.age} years old.`);
