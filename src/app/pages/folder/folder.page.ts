import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction } from 'src/app/interface/transiction.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {



  public balance: any;
  accounts: any = [
    {
      accountNumber: '0001',
      accountType: 'Savings Account',
      balance: 1000
    },
    {
      accountNumber: '0002',
      accountType: 'Current Account',
      balance: 2000
    },
    {
      accountNumber: '0003',
      accountType: 'Fixed Deposit Account',
      balance: 3000
    },
  ];
  expenses: ITransaction[] = [];
  incomes: ITransaction[] = [];
  constructor(
    private router: Router,
    private appStateService: AppStateService,
    private transactionsService: TransactionsService,
  ) { }

  ngOnInit(): void {
    this.balance = this.appStateService.getInitialBalance();
    this.expenses = this.transactionsService.getExpenses();
    this.incomes = this.transactionsService.getIncome();
  }

  navigateToTransactionList() {
    this.router.navigate(['/transactions']);
  }

  // Metodo chiamato quando cambia il toggle
  onToggleChange(event: any) {
    const toggleState = event.detail.checked; // true o false
    const balanceDiv = document.getElementById('balance-amount');
    console.log('balanceDiv', balanceDiv, toggleState);

    if (balanceDiv) {
      balanceDiv.textContent = toggleState
        ? '*****'
        : `${this.balance.amount} ${this.balance.currency.symbol}`;
    }
  }
}
