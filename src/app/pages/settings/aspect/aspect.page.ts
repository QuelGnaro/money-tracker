import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aspect',
  templateUrl: './aspect.page.html',
  styleUrls: ['./aspect.page.scss'],
})
export class AspectPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  backToSettings() {
    this.navCtrl.navigateBack('/settings');
  }

}
