import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspectPageRoutingModule } from './aspect-routing.module';

import { AspectPage } from './aspect.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AspectPageRoutingModule
  ],
  declarations: [AspectPage]
})
export class AspectPageModule { }
