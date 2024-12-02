import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyGroupsPage } from './family-groups.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyGroupsPageRoutingModule {}
