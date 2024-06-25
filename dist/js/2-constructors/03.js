"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}
const myCircle = new Circle("Red", 3.14);
console.log(`My ${myCircle.color} circle has a ${myCircle.radius} radius.`);
