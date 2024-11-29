import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageThreeComponent } from '../page-three/page-three.component';
import { AppStateService } from 'src/app/services/app-state.service';

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
  public data = [
    { name: 'United States Dollar', abbreviation: 'USD' },
    { name: 'Euro', abbreviation: 'EUR' },
    { name: 'Japanese Yen', abbreviation: 'JPY' },
    { name: 'British Pound Sterling', abbreviation: 'GBP' },
    { name: 'Australian Dollar', abbreviation: 'AUD' },
    { name: 'Canadian Dollar', abbreviation: 'CAD' },
    { name: 'Swiss Franc', abbreviation: 'CHF' },
    { name: 'Chinese Yuan', abbreviation: 'CNY' },
    { name: 'Swedish Krona', abbreviation: 'SEK' },
    { name: 'New Zealand Dollar', abbreviation: 'NZD' },
    { name: 'Indian Rupee', abbreviation: 'INR' },
    { name: 'Brazilian Real', abbreviation: 'BRL' },
    { name: 'Mexican Peso', abbreviation: 'MXN' },
    { name: 'South African Rand', abbreviation: 'ZAR' },
    { name: 'Russian Ruble', abbreviation: 'RUB' },
    { name: 'Singapore Dollar', abbreviation: 'SGD' },
    { name: 'Hong Kong Dollar', abbreviation: 'HKD' },
    { name: 'South Korean Won', abbreviation: 'KRW' },
    { name: 'Turkish Lira', abbreviation: 'TRY' },
    { name: 'Saudi Riyal', abbreviation: 'SAR' }
  ];

  public currencies = [...this.data];


  constructor(
    private appStateService: AppStateService
  ) { }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.currencies = this.data.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }


  selectItem(item: any, index: number): void {
    this.selectedItem = item;
    this.selectedIndex = index;

    // Salva l'elemento selezionato nello stato dell'app
    this.appStateService.saveSelectedItem(item);
  }

}
