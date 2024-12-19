import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageThreeComponent } from '../page-three/page-three.component';
import { AppStateService } from 'src/app/services/app-state.service';
import { ICurrency } from 'src/app/interface/currency.interface';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class PageTwoComponent {
  component = PageThreeComponent;
  selectedItem: any = null;
  selectedIndex: number | null = null;
  // TODO: passare questi dati da un servizio
  public currencies: ICurrency[] = [
    { name: 'United States Dollar', iso: 'USD', symbol: '$' },
    { name: 'Euro', iso: 'EUR', symbol: '€' },
    { name: 'Japanese Yen', iso: 'JPY', symbol: '¥' },
    { name: 'British Pound Sterling', iso: 'GBP', symbol: '£' },
    { name: 'Australian Dollar', iso: 'AUD', symbol: '$' },
    { name: 'Canadian Dollar', iso: 'CAD', symbol: '$' },
    { name: 'Swiss Franc', iso: 'CHF', symbol: 'CHF' },
    { name: 'Chinese Yuan', iso: 'CNY', symbol: '¥' },
    { name: 'Swedish Krona', iso: 'SEK', symbol: 'kr' },
    { name: 'New Zealand Dollar', iso: 'NZD', symbol: '$' },
    { name: 'Indian Rupee', iso: 'INR', symbol: '₹' },
    { name: 'Brazilian Real', iso: 'BRL', symbol: 'R$' },
    { name: 'Mexican Peso', iso: 'MXN', symbol: '$' },
    { name: 'South African Rand', iso: 'ZAR', symbol: 'R' },
    { name: 'Russian Ruble', iso: 'RUB', symbol: '₽' },
    { name: 'Singapore Dollar', iso: 'SGD', symbol: '$' },
    { name: 'Hong Kong Dollar', iso: 'HKD', symbol: '$' },
    { name: 'South Korean Won', iso: 'KRW', symbol: '₩' },
    { name: 'Turkish Lira', iso: 'TRY', symbol: '₺' },
    { name: 'Saudi Riyal', iso: 'SAR', symbol: '﷼' }
  ];

  constructor(
    private appStateService: AppStateService
  ) { }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.currencies = this.currencies.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }


  selectItem(item: any, index: number): void {
    this.selectedItem = item;
    this.selectedIndex = index;

    // Salva l'elemento selezionato nello stato dell'app
    this.appStateService.saveSelectedCurrency(item);
  }

}
