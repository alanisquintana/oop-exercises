"use strict";
class Formats {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Rectangle extends Formats {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const myRectangle = new Rectangle("Purple", 20, 10);
console.log(`My ${myRectangle.color} rectangle is ${myRectangle.getPerimeter()}cm.`);
