import { IIcon } from "./icon.interface";

export interface IFamily {
  icon: IIcon;
  id: number;
  color: string;
  name: string;
  members: number[]; //profileIDs
  accounts: number[]; //accountIDs
  updatedAt: Date;
  deleted: boolean;
}

