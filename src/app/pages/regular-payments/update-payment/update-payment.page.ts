import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { paymentForm } from 'src/app/constants/new-payment-form.constant';
import { IForm } from 'src/app/interface/form.interface';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.page.html',
  styleUrls: ['./update-payment.page.scss'],
})
export class UpdatePaymentPage implements OnInit {
  id: any;

  updatePayment = paymentForm as IForm;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  backToPayments() {
    this.navCtrl.navigateBack('/regular-payments');
  }

  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
  }
}
