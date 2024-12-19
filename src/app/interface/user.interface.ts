export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // photoURL: string;
  familyIDs: number[];
  accountsIDs: number[];
  updatedAt: Date;
  deleted: boolean;
}