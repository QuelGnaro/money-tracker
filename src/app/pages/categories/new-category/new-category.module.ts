import { NgModule } from '@angular/core';


import { NewCategoryPageRoutingModule } from './new-category-routing.module';

import { NewCategoryPage } from './new-category.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewCategoryPageRoutingModule
  ],
  declarations: [NewCategoryPage]
})
export class NewCategoryPageModule { }
