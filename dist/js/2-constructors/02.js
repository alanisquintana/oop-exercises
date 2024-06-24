"use strict";
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const employeeWithId = new Employee("Alanis", 1);
const employeeWithoutId = new Employee("George");
console.log("Employee with id:");
console.log("Name: ", employeeWithId.name);
console.log("Id: ", employeeWithId.id);
console.log("Employee without id:");
console.log("Name: ", employeeWithoutId.name);
