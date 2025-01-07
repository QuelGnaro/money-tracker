import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePaymentPage } from './update-payment.page';

describe('UpdatePaymentPage', () => {
  let component: UpdatePaymentPage;
  let fixture: ComponentFixture<UpdatePaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
