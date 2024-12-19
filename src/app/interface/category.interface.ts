import { IIcon } from "./icon.interface";

export interface ICategory {
  id: number;
  name: string;
  icon: IIcon;
  color: string;
  type?: 'income' | 'expense';
  expectedExpense?: number;
  transactionsIDs?: number[];
  accountIDs?: number[];
  updatedAt: Date;
  deleted: boolean;
}