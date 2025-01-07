import { NgModule } from '@angular/core';
import { NewPaymentPageRoutingModule } from './new-payment-routing.module';

import { NewPaymentPage } from './new-payment.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewPaymentPageRoutingModule
  ],
  declarations: [NewPaymentPage]
})
export class NewPaymentPageModule { }
