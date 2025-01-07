import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'aspect',
    loadChildren: () => import('./aspect/aspect.module').then(m => m.AspectPageModule)
  },
  {
    path: 'customization',
    loadChildren: () => import('./customization/customization.module').then(m => m.CustomizationPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then(m => m.DataPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule { }
