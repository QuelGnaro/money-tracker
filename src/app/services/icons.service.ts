import { Injectable } from '@angular/core';
import { IIcon } from '../interface/icon.interface';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  selectedIcon: IIcon | null = null;

  constructor() { }

  setSelectedIcon(icon: any) {
    this.selectedIcon = icon;
    console.log('Icona selezionata:', icon);

  }
}
