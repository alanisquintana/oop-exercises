/*  Write a TypeScript class called StudentPrivate with the following properties and methods:
    private name: string
    protected studentId: number
The class should have a constructor that accepts a name and student ID. Implement a method:
    public displayInfo(): void that displays the student's name and ID.
Make sure that the studentId property is accessible only within the class and its subclasses.
*/

class StudentPrivate {
    private name: string
    protected studentId: number
    
    constructor(name: string, studentId: number) {
        this.name = name
        this.studentId = studentId
    }

    public displayInfo(): void {
        console.log(`Student name: `, this.name)
        console.log(`Student Id: `, this.studentId)
    }
}

const myStudentPrivate = new StudentPrivate("Alanis", 867347)

console.log(myStudentPrivate.displayInfo());
