import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings = [
    { name: 'Aspetto', redirectTo: '/settings/aspect', icon: 'color-filter', },
    { name: 'Contatta', redirectTo: '/settings/contact', icon: 'call', },
    { name: 'Dati', redirectTo: '/settings/data', icon: 'server', },
    { name: 'Personalizzazione', redirectTo: '/settings/customization', icon: 'glasses', },
  ];


  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private ctrlNav: NavController,
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  navigateTo(url: string) {
    console.log('Navigating to', url);

    this.ctrlNav.navigateForward(url);
  }

}
