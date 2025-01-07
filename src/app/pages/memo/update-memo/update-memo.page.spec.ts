import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMemoPage } from './update-memo.page';

describe('UpdateMemoPage', () => {
  let component: UpdateMemoPage;
  let fixture: ComponentFixture<UpdateMemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
