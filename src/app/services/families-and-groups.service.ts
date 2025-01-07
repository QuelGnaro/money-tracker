import { Injectable } from '@angular/core';
import { IFamily } from '../interface/family.interface';

@Injectable({
  providedIn: 'root'
})
export class FamiliesAndGroupsService {

  families: IFamily[] = [
    {
      icon: { id: 1, label: 'bus' },
      id: 1,
      color: 'green',
      name: 'Family 1',
      members: [1, 2, 3, 4],
      accounts: [1, 2, 3],
      updatedAt: new Date(),
      deleted: false
    },
    {
      icon: { id: 2, label: 'bus' },
      id: 2,
      color: 'green',
      name: 'Family 2',
      members: [1, 2, 3, 4],
      accounts: [1, 2, 3],
      updatedAt: new Date(),
      deleted: false
    },
    {
      icon: { id: 3, label: 'bus' },
      id: 3,
      color: 'green',
      name: 'Family 3',
      members: [1, 2, 3, 4],
      accounts: [1, 2, 3],
      updatedAt: new Date(),
      deleted: false
    }
  ];

  constructor() { }

  getFamilies() {
    return this.families;
  }

  getFamilyById(id: number) {
    const family = this.families.find(family => family.id === id);
    return family;
  }

  createFamily() { }

  updateFamily() { }

  deleteFamily() { }

}
