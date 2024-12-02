import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularPaymentsPageRoutingModule } from './regular-payments-routing.module';

import { RegularPaymentsPage } from './regular-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegularPaymentsPageRoutingModule
  ],
  declarations: [RegularPaymentsPage]
})
export class RegularPaymentsPageModule {}
