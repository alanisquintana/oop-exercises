/* 
Write a TypeScript program that creates a class called Guest with the following properties and methods:
    protected name: string
    private age: number
The class should have a constructor that accepts name and age. Implement a method:
public introduce(): string that returns a string introducing the guest, including its name and age.
Ensure that the age property is accessible only within the class.    
*/

class Guest {
    protected name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public introduce(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const myGuest = new Guest("George", 27)

console.log(myGuest.introduce());
