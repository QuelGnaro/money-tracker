export interface IFamily {
  id: number;
  name: string;
  membersIDs: number[];
  accountsIDs: number[];
  updatedAt: Date;
  deleted: boolean;
}