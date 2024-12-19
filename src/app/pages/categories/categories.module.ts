import { NgModule } from '@angular/core';


import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CategoriesPageRoutingModule
  ],
  declarations: [CategoriesPage]
})
export class CategoriesPageModule { }
