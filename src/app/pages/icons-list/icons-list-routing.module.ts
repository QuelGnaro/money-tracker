import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconsListPage } from './icons-list.page';

const routes: Routes = [
  {
    path: '',
    component: IconsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsListPageRoutingModule {}
