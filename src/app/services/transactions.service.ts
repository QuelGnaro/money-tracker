import { Injectable } from '@angular/core';
import { ITransaction } from '../interface/transiction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  public expenses: ITransaction[] = [];
  public incomes: ITransaction[] = [];

  mokData: ITransaction[] = [
    {
      id: 1,
      type: 'expense',
      comment: '',
      accountId: 1,
      images: [],
      tags: [],
      currency: { name: 'Dollaro', iso: 'USD', symbol: '$' },
      categoryId: 1,
      amount: 50,
      date: new Date('2021-07-01')
    },
    {
      id: 2,
      type: 'expense',
      comment: 'Gym',
      accountId: 1,
      images: [],
      tags: [{ name: 'Gym', id: 1 }, { name: 'Sport', id: 2 }],
      currency: { name: 'Dollaro', iso: 'USD', symbol: '$' },
      categoryId: 1,
      amount: 50,
      date: new Date('2021-07-01')
    },
    {
      id: 2,
      type: 'expense',
      comment: 'Gym',
      accountId: 1,
      images: [],
      tags: [],
      currency: { name: 'Dollaro', iso: 'USD', symbol: '$' },
      categoryId: 1,
      amount: 50,
      date: new Date('2021-07-01')
    },
    {
      id: 3,
      type: 'expense',
      comment: 'car',
      accountId: 1,
      images: [],
      tags: [],
      currency: { name: 'Dollaro', iso: 'USD', symbol: '$' },
      categoryId: 1,
      amount: 50,
      date: new Date('2021-07-01')
    }
  ];
  constructor(
  ) { }

  addTransaction(transaction: ITransaction): void {
    if (transaction.type === 'expense') {
      this.expenses.push(transaction);
    } else {
      this.incomes.push(transaction);
    }
  }

  getExpenses(): ITransaction[] {
    // return this.expenses;
    return this.mokData;
  }

  getIncome(): ITransaction[] {
    // return this.incomes;
    return this.mokData;
  }

  removeTransaction(transaction: ITransaction): void {
    if (transaction.type === 'expense') {
      this.expenses = this.expenses.filter(expense => expense.id !== transaction.id);
      this.getExpenses();
    } else {
      this.incomes = this.incomes.filter(income => income.id !== transaction.id);
      this.getIncome();
    }
  }

  updateTransaction(transaction: ITransaction): void {
    if (transaction.type === 'expense') {
      this.expenses = this.expenses.map(expense => {
        if (expense.id === transaction.id) {
          return transaction;
        }
        return expense;
      });
      this.getExpenses();
    } else {
      this.incomes = this.incomes.map(income => {
        if (income.id === transaction.id) {
          return transaction;
        }
        return income;
      });
      this.getIncome();
    }
  }
}
