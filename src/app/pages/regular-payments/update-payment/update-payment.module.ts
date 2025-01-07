import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePaymentPageRoutingModule } from './update-payment-routing.module';

import { UpdatePaymentPage } from './update-payment.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UpdatePaymentPageRoutingModule
  ],
  declarations: [UpdatePaymentPage]
})
export class UpdatePaymentPageModule { }
