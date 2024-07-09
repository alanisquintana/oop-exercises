/* Write a TypeScript utility class with static methods for common utility functions, such as formatDate, generateRandomString, and capitalizeString. Each method should provide the respective utility functionality and be accessible without creating an instance of the class. Test the utility class by using its static methods to perform various tasks. */

class Utility {
    static formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }
    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters.charAt(randomIndex)
        }
        return result
    }
    static capitalizeString(input: string): string {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

}

const today = new Date()
console.log(`Formatted Date: ${Utility.formatDate(today)}`)

const randomString = Utility.generateRandomString(10)
console.log(`Random String: ${randomString}`)

const inputString = 'hello world'
console.log(`Capitalized String: ${Utility.capitalizeString(inputString)}`)