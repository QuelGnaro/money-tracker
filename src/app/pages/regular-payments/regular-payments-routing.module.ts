import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularPaymentsPage } from './regular-payments.page';

const routes: Routes = [
  {
    path: '',
    component: RegularPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularPaymentsPageRoutingModule {}
