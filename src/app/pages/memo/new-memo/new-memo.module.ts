import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMemoPageRoutingModule } from './new-memo-routing.module';

import { NewMemoPage } from './new-memo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewMemoPageRoutingModule
  ],
  declarations: [NewMemoPage]
})
export class NewMemoPageModule { }
