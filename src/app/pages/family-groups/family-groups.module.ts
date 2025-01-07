import { NgModule } from '@angular/core';


import { FamilyGroupsPageRoutingModule } from './family-groups-routing.module';

import { FamilyGroupsPage } from './family-groups.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FamilyGroupsPageRoutingModule
  ],
  declarations: [FamilyGroupsPage]
})
export class FamilyGroupsPageModule { }
