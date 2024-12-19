import { ICurrency } from "./currency.interface";
import { IIcon } from "./icon.interface";


export interface IAccount {
  id: number;
  name: string;
  amount: number;
  isJoint: boolean; // Flag per indicare se è un conto cointestato 
  family?: number[]; // Array di ID del gruppo di persone che condividono il conto
  icon: IIcon;
  color: string;
  currency: ICurrency;
  doNotShow: boolean; // Flag per indicare se non mostrare il conto nel totale
  checked: boolean; // si usa nella modale per i grafici
  subAccounts?: IAccount[]; // se si tratta di un main account con sub conti
  categoriesIDs?: number[]; // Array di ID delle categorie associate al conto
}

