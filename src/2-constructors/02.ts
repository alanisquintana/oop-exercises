/* Write a TypeScript program that creates a class called Employee with 
properties name and id. Add constructor overloading to support multiple ways of 
initializing a Employee object. Implement one constructor that takes both name 
and id as parameters and another constructor that takes only name, assuming the 
id is unknown. */

class Employee {
    name: string
    id: number | undefined

    constructor(name: string, id?: number) {
       this.name = name
       this.id = id 
    }
}

const employeeWithId = new Employee("Alanis", 1)
const employeeWithoutId = new Employee("George")

console.log("Employee with id:")
console.log("Name: ", employeeWithId.name)
console.log("Id: ", employeeWithId.id)

console.log("Employee without id:")
console.log("Name: ", employeeWithoutId.name)
