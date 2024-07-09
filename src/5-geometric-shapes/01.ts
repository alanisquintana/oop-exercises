// Write a TypeScript program that creates an abstract class GeometricShape with properties like name and abstract methods for calculating area and perimeter. Implement derived classes for specific shapes (e.g., Circle, Rectangle, Triangle) that extend GeometricShape and provide concrete implementations for area and perimeter calculations.

abstract class GeometricShape {
    name: string
    abstract calculatingArea(): number
    abstract calculatingPerimeter(): number

    constructor(name: string) {
        this.name = name
    }
}

class RectangleShape extends GeometricShape {
    width: number
    height: number

    constructor(name: string, width: number, height: number) {
        super(name)
        this.width = width
        this.height = height
    }

    calculatingArea(): number {
        return this.width * this.height
    }
    calculatingPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}
