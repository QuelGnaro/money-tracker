import { NgModule } from '@angular/core';


import { AccountsPageRoutingModule } from './accounts-routing.module';

import { AccountsPage } from './accounts.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AccountsPageRoutingModule
  ],
  declarations: [AccountsPage]
})
export class AccountsPageModule { }
