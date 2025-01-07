import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMemoPage } from './new-memo.page';

const routes: Routes = [
  {
    path: '',
    component: NewMemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMemoPageRoutingModule {}
