import { Injectable } from '@angular/core';
import { ICurrency } from '../interface/currency.interface';
import { IAccount } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private selectedCurrency: ICurrency;
  private initialBalance: IAccount;

  colors: string[] = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#800080',
  ];
  constructor() {
    this.selectedCurrency = {
      name: '',
      iso: '',
      symbol: ''
    };
    // ! mok initial balance
    this.initialBalance = {
      id: 1,
      name: 'Cash',
      amount: 1000,
      isJoint: false,
      icon: {
        id: 1,
        label: 'cash'
      },
      color: '#00FF00',
      currency: {
        name: 'Euro',
        iso: 'EUR',
        symbol: '€'
      },
      doNotShow: false,
      checked: false
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

  getColors(): string[] {
    return this.colors;
  }

  selectNewColor(hex: string) {
    this.colors.unshift(hex);
    this.colors.pop();
  }
}
