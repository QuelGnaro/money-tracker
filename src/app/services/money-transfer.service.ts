import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {

  constructor() { }

  newMoneyTransfer(fromAccount: any, toAccount: any, amount: number) {
    // const fromAccountIndex = this.accounts.indexOf(fromAccount);
    // const toAccountIndex = this.accounts.indexOf(toAccount);
    // this.accounts[fromAccountIndex].balance -= amount;
    // this.accounts[toAccountIndex].balance += amount;
  }
}
