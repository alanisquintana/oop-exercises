/*  Write a TypeScript class called BankAccount with the following properties and methods:
    private accountNumber: string
    protected balance: number
The class should have a constructor that accepts an account number and initializes the balance to 0. It should also include methods:
    public deposit(amount: number): void to add funds to the account.
    public withdraw(amount: number): void to deduct funds from the account.
Only the class and its subclasses should have access to the balance property. 
*/

class BankAccount {
    private accountNumber: string
    protected balance: number

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber
        this.balance = 0
    }

    public deposit(amount: number): void {
        this.balance += amount
        console.log(this.balance)
    }
    public withdraw(amount: number): void {
        this.balance -= amount
        console.log(this.balance)
    }
}
const myBankAccount = new BankAccount("178496")
myBankAccount.deposit(500)
myBankAccount.withdraw(200)
