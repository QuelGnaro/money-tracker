import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private selectedItem: any = null;

  saveSelectedItem(item: any): void {
    this.selectedItem = item;
    console.log('Elemento salvato nello stato:', item);
  }

  getSelectedItem(): any {
    return this.selectedItem;
  }
}
