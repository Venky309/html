class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(100); 
console.log(account.getBalance()); 
