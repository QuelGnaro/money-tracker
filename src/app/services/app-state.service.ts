import { Injectable } from '@angular/core';
import { ICurrency } from '../interface/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private selectedItem: ICurrency;

  constructor() {
    this.selectedItem = {
      name: '',
      abbreviation: ''
    };
  }

  // TODO: salvare il saldo dopo l'inizialization

  saveSelectedItem(item: ICurrency): void {
    this.selectedItem = item;
    console.log('Elemento salvato nello stato:', item);
  }

  getSelectedItem(): ICurrency {
    return this.selectedItem;
  }
}
