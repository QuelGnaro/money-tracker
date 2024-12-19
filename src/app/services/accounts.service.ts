import { Injectable } from '@angular/core';
import { IAccount } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts: IAccount[] = [
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 1,
      name: "Account 1",
      amount: 1000,
      isJoint: false,
      coOwners: [],
      icon: "key",
      color: "orange",
      currency: {
        iso: "USD",
        name: "USD",
        symbol: "$"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 2,
      name: "Account 2",
      amount: 500,
      isJoint: true,
      coOwners: ["user1", "user2"],
      icon: "business",
      color: "red",
      currency: {
        iso: "USD",
        name: "EUR",
        symbol: "€"
      },
      doNotShow: false,
      checked: false,
      transactions: [],
      subAccounts: []
    },
    {
      id: 3,
      name: "Account 3",
      amount: 2000,
      isJoint: false,
      coOwners: [],
      icon: "wallet",
      color: "blue",
      currency: {
        iso: "USD",
        name: "GBP",
        symbol: "£"
      },
      doNotShow: true,
      checked: false,
      transactions: [],
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
