// Write a TypeScript program that defines an abstract class Employee with properties such as name, employeeId, and an abstract method calculateSalary(). Create derived classes (e.g., FullTimeEmployee, PartTimeEmployee) that extend Employee and provide salary calculation logic based on employment type

abstract class EmployeeSalary {
    name: string
    employeeId: number
    

    constructor(name: string, employeeId: number, ) {
        this.name = name
        this.employeeId = employeeId
    }

    abstract calculateSalary(): number
}

class Stagiary extends EmployeeSalary {
    salary: number

    constructor(name: string, employeeId: number) {
        super(name, employeeId)
        this.salary = 1500
    }

    calculateSalary(): number {
        return this.salary + 200 + 150
    }
}

const myStagiary = new Stagiary('George', 239753)

console.log(myStagiary.calculateSalary());
