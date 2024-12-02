import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyGroupsPage } from './family-groups.page';

describe('FamilyGroupsPage', () => {
  let component: FamilyGroupsPage;
  let fixture: ComponentFixture<FamilyGroupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
