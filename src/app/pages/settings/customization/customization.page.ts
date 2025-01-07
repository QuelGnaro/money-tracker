import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.page.html',
  styleUrls: ['./customization.page.scss'],
})
export class CustomizationPage implements OnInit {
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  backToSettings() {
    this.navCtrl.navigateBack('/settings');
  }


}
