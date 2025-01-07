import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizationPageRoutingModule } from './customization-routing.module';

import { CustomizationPage } from './customization.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CustomizationPageRoutingModule
  ],
  declarations: [CustomizationPage]
})
export class CustomizationPageModule { }
