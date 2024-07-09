/* Write a TypeScript program that creates a class called Student with 
properties name and classRoom. Implement a constructor that initializes these 
properties when a Student object is created. */

class Student {
    name: string
    classroom: number

    constructor(name: string, classroom: number) {
        this.name = name
        this.classroom = classroom
    }

    start(): void {
        console.log(`The student ${this.name} is from the classroom ${this.classroom}.`)
    }
}

const myStudent = new Student('Alanis', 1)

myStudent.start()
