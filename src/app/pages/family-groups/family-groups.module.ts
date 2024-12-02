import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyGroupsPageRoutingModule } from './family-groups-routing.module';

import { FamilyGroupsPage } from './family-groups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyGroupsPageRoutingModule
  ],
  declarations: [FamilyGroupsPage]
})
export class FamilyGroupsPageModule {}
