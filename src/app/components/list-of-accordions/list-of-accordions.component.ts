import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ITransaction } from 'src/app/interface/transiction.interface';

@Component({
  selector: 'app-list-of-accordions',
  templateUrl: './list-of-accordions.component.html',
  styleUrls: ['./list-of-accordions.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ListOfAccordionsComponent implements OnInit {
  @Input() accordions: any[] = [];
  @Input() accounts: any[] = [];

  constructor() { }
  ngOnInit(): void {
    console.log('List of Accordions');
  }


}
