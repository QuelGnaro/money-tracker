import { NgModule } from '@angular/core';


import { IconsListPageRoutingModule } from './icons-list-routing.module';

import { IconsListPage } from './icons-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IconsListPageRoutingModule
  ],
  declarations: [IconsListPage]
})
export class IconsListPageModule { }
