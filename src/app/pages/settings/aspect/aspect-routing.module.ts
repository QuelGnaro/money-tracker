import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspectPage } from './aspect.page';

const routes: Routes = [
  {
    path: '',
    component: AspectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspectPageRoutingModule {}
