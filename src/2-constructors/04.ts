/* Write a TypeScript class called Children with properties name and age. 
Implement a constructor that initializes these properties when a Children 
object is created. Additionally, add validation to ensure that the age provided 
is a positive number. If the age is not positive, set it to a default value of 
0. */

class Children {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.checkAge()
    }

    checkAge() {
        if (this.age < 0) {
            this.age = 0
            return
        }
    }
}

const myChildren = new Children("Stefano", -1)
console.log(`My children ${myChildren.name} is ${myChildren.age} years old.`)
