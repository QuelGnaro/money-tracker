import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IFamily } from 'src/app/interface/family.interface';
import { FamiliesAndGroupsService } from 'src/app/services/families-and-groups.service';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.page.html',
  styleUrls: ['./family-detail.page.scss'],
})
export class FamilyDetailPage implements OnInit {


  family: any;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private familiesAndGroupsService: FamiliesAndGroupsService
  ) {

  }

  ngOnInit() {
    console.log('detail Group');
    this.getFamily();
  }

  backToGroups() {
    this.navCtrl.navigateBack('family-groups');
  }

  getFamily() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.family = this.familiesAndGroupsService.getFamilyById(id);
  }

}
