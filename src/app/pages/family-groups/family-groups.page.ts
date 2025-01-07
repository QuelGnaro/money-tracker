import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IFamily } from 'src/app/interface/family.interface';
import { FamiliesAndGroupsService } from 'src/app/services/families-and-groups.service';

@Component({
  selector: 'app-family-groups',
  templateUrl: './family-groups.page.html',
  styleUrls: ['./family-groups.page.scss'],
})
export class FamilyGroupsPage implements OnInit {

  familyGroups: IFamily[] = [

  ];

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private navCtrl: NavController,
    private familiesAndGroupsService: FamiliesAndGroupsService
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getFamilies();
  }

  getFamilies() {
    this.familyGroups = this.familiesAndGroupsService.getFamilies();
  }

  newFamily() {
    this.navCtrl.navigateForward('family-groups/new-group');
  }
}
