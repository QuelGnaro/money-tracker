import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DialogModalComponent } from 'src/app/components/dialog-modal/dialog-modal.component';

import { AccountsService } from 'src/app/services/accounts.service';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {

  accounts = this.accountsService.getAccountsList();

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private accountsService: AccountsService,
  ) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }



}