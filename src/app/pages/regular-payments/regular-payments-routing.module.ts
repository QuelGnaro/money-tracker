import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularPaymentsPage } from './regular-payments.page';

const routes: Routes = [
  {
    path: '',
    component: RegularPaymentsPage
  },
  {
    path: 'new-payment',
    loadChildren: () => import('./new-payment/new-payment.module').then(m => m.NewPaymentPageModule)
  },
  {
    path: 'update-payment/:id',
    loadChildren: () => import('./update-payment/update-payment.module').then(m => m.UpdatePaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularPaymentsPageRoutingModule { }
