import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoPage } from './memo.page';

const routes: Routes = [
  {
    path: '',
    component: MemoPage
  },
  {
    path: 'new-memo',
    loadChildren: () => import('./new-memo/new-memo.module').then(m => m.NewMemoPageModule)
  },
  {
    path: 'update-memo/:id',
    loadChildren: () => import('./update-memo/update-memo.module').then(m => m.UpdateMemoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoPageRoutingModule { }
