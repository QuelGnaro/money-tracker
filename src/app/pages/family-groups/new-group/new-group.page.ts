import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.page.html',
  styleUrls: ['./new-group.page.scss'],
})
export class NewGroupPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log('New Group');

  }

  backToGroups() {
    this.navCtrl.navigateBack('family-groups');
  }


}
