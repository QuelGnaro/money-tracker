import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsListPage } from './icons-list.page';

describe('IconsListPage', () => {
  let component: IconsListPage;
  let fixture: ComponentFixture<IconsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
