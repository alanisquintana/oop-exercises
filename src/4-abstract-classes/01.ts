// Write a TypeScript program that creates an abstract class called Formats with properties like color and an abstract method getPerimeter(). Implement derived classes for specific formats (e.g., Circle, Rectangle) that extend Formats and provide concrete implementations for calculating their perimeters.

    abstract class Formats {
        color: string

        constructor(color: string) {
            this.color = color
        }

        abstract getPerimeter(): number
    }

    class Rectangle extends Formats {
        width: number
        height: number
        
        constructor(color: string, width: number, height: number) {
            super(color)
            this.width = width
            this.height = height
        }

        getPerimeter(): number {
            return 2 * (this.width + this.height)
        }
    }

    const myRectangle = new Rectangle('Purple', 20, 10)

    console.log(`My ${myRectangle.color} rectangle is ${myRectangle.getPerimeter()}cm.`);
    