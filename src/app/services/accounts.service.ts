import { Injectable } from '@angular/core';
import { IAccount } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts: IAccount[] = [
    {
      id: 2,
      name: "Account 2",
      amount: 500,
      isJoint: true,
      icon: {
        id: 1,
        label: "cash"
      },
      color: "red",
      currency: {
        iso: "USD",
        name: "EUR",
        symbol: "€"
      },
      doNotShow: false,
      checked: false,
      subAccounts: []
    },
    {
      id: 3,
      name: "Account 3",
      amount: 2000,
      isJoint: false,
      icon: {
        id: 1,
        label: "cash"
      },
      color: "blue",
      currency: {
        iso: "USD",
        name: "GBP",
        symbol: "£"
      },
      doNotShow: true,
      checked: false,
      subAccounts: []
    }
  ];
  constructor() { }

  getAccountsList() {
    return this.accounts;
  }

  createNewAccount(account: any) {
    this.accounts.push(account);
  }

  deleteAccount(account: any) {
    const index = this.accounts.indexOf(account);
    this.accounts.splice(index, 1);
  }

  updateAccount(account: any) {
    const index = this.accounts.indexOf(account);
    this.accounts[index] = account;
  }

  getAccountDetails(accountNumber: string) {
    return this.accounts.find((accountNumber: any) => accountNumber.accountNumber === accountNumber);
  }
}
