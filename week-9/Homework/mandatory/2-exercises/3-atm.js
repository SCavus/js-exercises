/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    constructor() {
        this.balance = 0
    }
    make_deposit(money) {
        this.balance += money
    }
    check_balance() {
        console.log(this.balance)
    }
    make_withdrawl = (money) => {
        this.balance -= money
        this.balance < 0 ? console.log("Your balance is not enough to complete this action") : console.log(this.balance)
    }

}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario