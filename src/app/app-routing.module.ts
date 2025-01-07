import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // ! cambaire quando ci sarà auth guard
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'regular-payments',
    loadChildren: () => import('./pages/regular-payments/regular-payments.module').then(m => m.RegularPaymentsPageModule)
  },
  {
    path: 'memos',
    loadChildren: () => import('./pages/memo/memo.module').then(m => m.MemoPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'family-groups',
    loadChildren: () => import('./pages/family-groups/family-groups.module').then(m => m.FamilyGroupsPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsPageModule)
  },
  {
    path: 'icons-list',
    loadChildren: () => import('./pages/icons-list/icons-list.module').then(m => m.IconsListPageModule)
  },
  {
    path: "**",
    redirectTo: ''
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
