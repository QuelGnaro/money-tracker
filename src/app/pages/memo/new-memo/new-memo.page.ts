import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { memoForm } from 'src/app/constants/new-memo-form.constant';
import { IForm } from 'src/app/interface/form.interface';
import { MemosService } from 'src/app/services/memos.service';

@Component({
  selector: 'app-new-memo',
  templateUrl: './new-memo.page.html',
  styleUrls: ['./new-memo.page.scss'],
})
export class NewMemoPage implements OnInit {

  memoForm = memoForm as IForm;

  constructor(
    private navCtrl: NavController,
    private memosService: MemosService
  ) { }


  ngOnInit() {
    console.log('new memo');
  }

  backToMemos() {
    this.navCtrl.navigateBack('/memos');
  }

  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
  }


}
