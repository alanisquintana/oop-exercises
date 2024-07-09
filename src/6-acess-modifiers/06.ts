/* Write a TypeScript program that creates a class with static methods for common mathematical operations, such as add, subtract, multiply, and divide. Each method should accept two numbers as parameters and return the operation result. Test the class by performing various mathematical operations using its static methods. */

class MathUtils {
    static sum(x: number, y: number): number {
        return x + y
    }
    static subtract(x: number, y: number): number {
        return x - y
    }
    static multiply(x: number, y: number): number {
        return x * y
    }
    static divide(x: number, y: number): number {
        return x / y
    }

    constructor() {}
}

const num1 = 100
const num2 = 10

console.log(`Sum: ${MathUtils.sum(num1, num2)}`)
console.log(`Subtraction: ${MathUtils.subtract(num1, num2)}`)
console.log(`Multiplication: ${MathUtils.multiply(num1, num2)}`)
console.log(`Division: ${MathUtils.divide(num1, num2)}`)
