"use strict";
class Student {
    name;
    classroom;
    constructor(name, classroom) {
        this.name = name;
        this.classroom = classroom;
    }
    start() {
        console.log(`The student ${this.name} is from the classroom ${this.classroom}.`);
    }
}
const myStudent = new Student("Alanis", 1);
myStudent.start();
