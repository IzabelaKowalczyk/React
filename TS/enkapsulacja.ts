class BankAccount {
private balance: number;

// konstruktor
constructor(initialBalance:number){
    this.balance = initialBalance;
}

//setter ustawia
deposit (amount: number):void {
    this.balance += amount;
}

//getter wyswietla
getBalance() : number{
    return this.balance
}
}
// CTRl +? komentarz
// tab 
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
//console.log(account.balance)

