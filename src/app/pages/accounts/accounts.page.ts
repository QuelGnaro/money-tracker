import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from 'src/app/interface/account.interface';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private accountService: AccountsService,
  ) { }
  accounts: IAccount[] = [];
  totale: number = 10000;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getAccountsList();

  }

  getAccountsList() {
    return this.accounts = this.accountService.getAccountsList();
  }

}
