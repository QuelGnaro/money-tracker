import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoPageRoutingModule } from './memo-routing.module';

import { MemoPage } from './memo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MemoPageRoutingModule
  ],
  declarations: [MemoPage]
})
export class MemoPageModule { }
