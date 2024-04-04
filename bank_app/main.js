class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create BankAccount class object
const accJayanta = new BankAccount(1001, "Jayanta Mondal", 5000);
const accAjay = new BankAccount(1002, "Ajay Mondal", 1000);

// call methods with parameters
accJayanta.displayAccountInfo();
accJayanta.deposit(2000);
accJayanta.withdraw(1000);

console.log("<===========================>");

accAjay.displayAccountInfo();
accAjay.deposit(500);
accAjay.withdraw(1200);
