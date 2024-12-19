import { Injectable } from '@angular/core';
import { ICurrency } from '../interface/currency.interface';
import { IAccount } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private selectedCurrency: ICurrency;
  private initialBalance: IAccount;
  constructor() {
    this.selectedCurrency = {
      name: '',
      iso: '',
      symbol: ''
    };
    // ! mok initial balance
    this.initialBalance = {
      id: 1,
      amount: 1000,
      currency: {
        name: 'Euro',
        iso: 'EUR',
        symbol: '€'
      },
      icon: 'cash',
      color: 'green',
      name: 'prova',
      isJoint: false,
      doNotShow: false,
      checked: false,
    };
  }

  saveSelectedCurrency(item: ICurrency): void {
    this.selectedCurrency = item;
    console.log('Elemento salvato nello stato:', item);
  }

  getSelectedCurrency(): ICurrency {
    return this.selectedCurrency;
  }

  saveInitialBalance(balance: any): void {
    this.initialBalance = balance;
  }

  getInitialBalance(): any {
    return this.initialBalance;
  }
}
