import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { paymentForm } from 'src/app/constants/new-payment-form.constant';
import { IForm } from 'src/app/interface/form.interface';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.page.html',
  styleUrls: ['./new-payment.page.scss'],
})
export class NewPaymentPage implements OnInit {

  paymentForm = paymentForm as IForm;

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
  }

  backToPayments() {
    this.navCtrl.navigateBack('/regular-payments');
  }



}
