
import { ICurrency } from "./currency.interface";

export interface ITransaction {
  id: number;
  categoryId: number;
  amount: number;
  date: Date;
  comment: string;
  images: string[];
  tags: string[];
  currency: ICurrency;
  type: 'expense' | 'income';
  updatedAt: Date;
  deleted: boolean;
  photoURLs: string[];
}

