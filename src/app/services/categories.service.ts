import { Injectable } from '@angular/core';
import { ICategory } from '../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: ICategory[] = [
    {
      id: 1,
      name: 'Category 1',
      icon: { id: 1, label: 'key' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 2,
      name: 'Category 2',
      icon: { id: 2, label: 'wallet' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 3,
      name: 'Category 3',
      icon: { id: 3, label: 'airplane' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 4,
      name: 'Category 4',
      icon: { id: 4, label: 'person' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 4,
      name: 'Category 4',
      icon: { id: 5, label: 'home' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 4,
      name: 'Category 4',
      icon: { id: 6, label: 'settings' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 4,
      name: 'Category 4',
      icon: { id: 7, label: 'heart' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
    {
      id: 4,
      name: 'Category 4',
      icon: { id: 7, label: 'star' },
      color: 'orange',
      type: 'expense',
      expectedExpense: 1000
    },
  ];


  constructor() { }

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

}
