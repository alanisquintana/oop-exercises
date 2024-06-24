// Write a TypeScript program that creates a class called Draw with properties color and a method drawing(). This program prints a message indicating that the Draw is being drawn. Then, create a derived class Square that extends Draw. Override the drawing() method in the Square class to provide a specific implementation for drawing a Square.

class Draw {
    color: string

    constructor(color: string) {
        this.color = color
    }

    drawing() {
        console.log(`A ${this.color} draw is being drawn.`);
    }
}

class Square extends Draw {

    constructor(color: string) {
        super(color)
        this.drawing()
    }

    drawing() {
        console.log(`A ${this.color} square is being drawn.`);
    }
}

const mySquare = new Square("Blue")