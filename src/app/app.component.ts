import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/dashboard', icon: 'home' },
    { title: 'Conti', url: 'accounts', icon: 'wallet' },
    { title: 'Grafici', url: 'charts', icon: 'pie-chart' },
    { title: 'Categorie', url: '/categories', icon: 'apps' },
    { title: 'Pagamenti Regolari', url: '/regular-payments', icon: 'repeat' },
    { title: 'Promemoria', url: '/memos', icon: 'calendar' },
    { title: 'Impostazioni', url: '/settings', icon: 'cog' },
    { title: 'Gruppi/Famiglia', url: '/family-groups', icon: 'people' },
  ];
  constructor() { }
}
