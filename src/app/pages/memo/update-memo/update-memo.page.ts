import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { paymentForm } from 'src/app/constants/new-payment-form.constant';
import { IForm } from 'src/app/interface/form.interface';
import { MemosService } from 'src/app/services/memos.service';

@Component({
  selector: 'app-update-memo',
  templateUrl: './update-memo.page.html',
  styleUrls: ['./update-memo.page.scss'],
})
export class UpdateMemoPage implements OnInit {

  id: any;

  updateMemoForm = paymentForm as IForm;

  constructor(
    private navCtrl: NavController,
    private memosService: MemosService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  backToMemos() {
    this.navCtrl.navigateBack('/memos');
  }

  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
  }

}
