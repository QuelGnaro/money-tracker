import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyDetailPage } from './family-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyDetailPageRoutingModule {}
