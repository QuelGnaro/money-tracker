import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICurrency } from 'src/app/interface/currency.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss'],
  standalone: true,
  imports: [SharedModule
  ]
})
export class PageThreeComponent {
  balance: FormGroup;
  currency: ICurrency;

  constructor(
    private appStateService: AppStateService,
    private rotuer: Router,
    private fb: FormBuilder
  ) {
    this.currency = this.appStateService.getSelectedItem();

    this.balance = this.fb.group({
      amount: [null, Validators.required],
      currency: [this.currency]
    });

  }

  onSubmit() {
    console.log('Submitted values:', this.balance.value);
    this.navigateToDashboard;
  }

  navigateToDashboard() {
    this.rotuer.navigate(['/dashboard']);
  }


}
