import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegularPaymentsPage } from './regular-payments.page';

describe('RegularPaymentsPage', () => {
  let component: RegularPaymentsPage;
  let fixture: ComponentFixture<RegularPaymentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
