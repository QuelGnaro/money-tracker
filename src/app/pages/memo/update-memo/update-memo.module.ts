import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMemoPageRoutingModule } from './update-memo-routing.module';

import { UpdateMemoPage } from './update-memo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UpdateMemoPageRoutingModule
  ],
  declarations: [UpdateMemoPage]
})
export class UpdateMemoPageModule { }
