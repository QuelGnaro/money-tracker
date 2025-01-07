import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyGroupsPage } from './family-groups.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyGroupsPage
  },
  {
    path: 'new-group',
    loadChildren: () => import('./new-group/new-group.module').then(m => m.NewGroupPageModule)
  },
  {
    path: 'family-detail/:id',
    loadChildren: () => import('./family-detail/family-detail.module').then(m => m.FamilyDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyGroupsPageRoutingModule { }
