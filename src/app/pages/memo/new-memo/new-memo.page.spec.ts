import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMemoPage } from './new-memo.page';

describe('NewMemoPage', () => {
  let component: NewMemoPage;
  let fixture: ComponentFixture<NewMemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
