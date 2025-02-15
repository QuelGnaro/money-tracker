import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularPaymentsPageRoutingModule } from './regular-payments-routing.module';

import { RegularPaymentsPage } from './regular-payments.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegularPaymentsPageRoutingModule
  ],
  declarations: [RegularPaymentsPage]
})
export class RegularPaymentsPageModule { }
