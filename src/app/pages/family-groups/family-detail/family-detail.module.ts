import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyDetailPageRoutingModule } from './family-detail-routing.module';

import { FamilyDetailPage } from './family-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FamilyDetailPageRoutingModule
  ],
  declarations: [FamilyDetailPage]
})
export class FamilyDetailPageModule { }
