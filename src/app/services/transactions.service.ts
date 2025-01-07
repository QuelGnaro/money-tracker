import { Injectable } from '@angular/core';
import { ITransaction } from '../interface/transiction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactions: ITransaction[] = [];

  mokData: ITransaction[] = [
    {
      id: 1,
      amount: 100,
      date: new Date(),
      comment: 'comment',
      images: [''],
      tags: ['tag'],
      currency: {
        iso: 'USD',
        name: 'Dollaro USA',
        symbol: '$',
      },
      type: 'expense',
      updatedAt: new Date(),
      deleted: false,
      photoURLs: ['']
    },
    {
      id: 2,
      amount: 100,
      date: new Date(),
      comment: 'comment',
      images: [''],
      tags: [],
      currency: {
        iso: 'USD',
        name: 'Dollaro USA',
        symbol: '$',
      },
      type: 'expense',
      updatedAt: new Date(),
      deleted: false,
      photoURLs: ['']
    },
    {
      id: 3,
      amount: 100,
      date: new Date(),
      comment: 'comment',
      images: [''],
      tags: ['tag'],
      currency: {
        iso: 'USD',
        name: 'Dollaro USA',
        symbol: '$',
      },
      type: 'expense',
      updatedAt: new Date(),
      deleted: false,
      photoURLs: ['']
    }
  ];
  constructor(
  ) { }

  getTransactions(): ITransaction[] {
    return this.mokData;
  }

  getTransactionById(id: number): ITransaction {
    return this.mokData.find(item => item.id === id)!;
  }


  addTransaction(transaction: ITransaction): void {
    this.mokData.push(transaction);
  }

  removeTransaction(transaction: ITransaction): void {
    this.mokData = this.mokData.filter(item => item.id !== transaction.id);
  }

  updateTransaction(transaction: ITransaction): void {
    this.mokData = this.mokData.map(item => {
      if (item.id === transaction.id) {
        return transaction;
      }
      return item;
    });
  }




}
