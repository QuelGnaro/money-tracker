import { Injectable } from '@angular/core';
import { ICategory } from '../interface/category.interface';
import { TransactionsService } from './transactions.service';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: ICategory[] = [
    {
      id: 1,
      name: 'Food',
      icon: {
        label: 'fast-food',
        id: 1
      },
      color: '#FF0000',
      type: 'expense',
      expectedExpense: 100,
      transactionsIDs: [1, 2, 3],
      accountIDs: [1, 2],
      updatedAt: new Date(),
      deleted: false,
    },
    {
      id: 2,
      name: 'Salary',
      icon: {
        label: 'cash',
        id: 2

      },
      color: '#00FF00',
      type: 'income',
      transactionsIDs: [4, 5, 6],
      accountIDs: [1, 2],
      updatedAt: new Date(),
      deleted: false,
    },
    {
      id: 3,
      name: 'Transport',
      icon: {
        label: 'bus',
        id: 3
      },
      color: '#0000FF',
      type: 'expense',
      expectedExpense: 50,
      transactionsIDs: [2],
      accountIDs: [1, 2],
      updatedAt: new Date(),
      deleted: false,
    },
    {
      id: 4,
      name: 'Rent',
      icon: {
        label: 'home',
        id: 4
      },
      color: '#FFFF00',
      type: 'expense',
      expectedExpense: 500,
      transactionsIDs: [10, 11, 12],
      accountIDs: [1, 2],
      updatedAt: new Date(),
      deleted: false,
    },
    {
      id: 5,
      name: 'Gift',
      icon: {
        label: 'gift',
        id: 5
      },
      color: '#FF00FF',
      type: 'expense',
      expectedExpense: 20,
      transactionsIDs: [13, 14, 15],
      accountIDs: [1, 2],
      updatedAt: new Date(),
      deleted: false,
    },
  ];


  constructor(
    private transactionsService: TransactionsService
  ) { }

  getCategories() {
    return this.categories;
  }

  getCategory(itemId: number) {
    return this.categories.find(item => item.id === itemId);
  }

  addCategory(item: ICategory) {
    this.categories.push(item);
  }

  updateCategory(item: ICategory) {
    this.categories = this.categories.map(category => {
      if (category.id === item.id) {
        return item;
      }
      return category;
    });
  }

  deleteCategory(itemId: number) {
    this.categories = this.categories.filter(item => item.id !== itemId);
  }

  getExpenses(): ICategory[] {
    return this.categories.filter(item => item.type === 'expense');
  }

  getIncomes(): ICategory[] {
    return this.categories.filter(item => item.type === 'income');
  }

}