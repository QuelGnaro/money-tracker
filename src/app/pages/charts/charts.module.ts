import { NgModule } from '@angular/core';


import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ChartsPageRoutingModule
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule { }
