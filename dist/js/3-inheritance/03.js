"use strict";
class Draw {
    color;
    constructor(color) {
        this.color = color;
    }
    drawing() {
        console.log(`A ${this.color} draw is being drawn.`);
    }
}
class Square extends Draw {
    constructor(color) {
        super(color);
        this.drawing();
    }
    drawing() {
        console.log(`A ${this.color} square is being drawn.`);
    }
}
const mySquare = new Square("Blue");
