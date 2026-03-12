"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    balance;
    // konstruktor
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    //setter ustawia
    deposit(amount) {
        this.balance += amount;
    }
    //getter wyswietla
    getBalance() {
        return this.balance;
    }
}
// CTRl +? komentarz
// tab 
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
//console.log(account.balance)
//# sourceMappingURL=enkapsulacja.js.map