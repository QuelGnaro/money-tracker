import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ChartContainerComponent implements OnInit {
  // TODO: installare dependencie per chart.js e capirci qualcosa

  // TODO: tipizzare il chart data
  @Input() chartData: any[] = [];


  constructor() {
    addIcons({ add });
  }



  ngOnInit() {
    console.log('Chart Container');
  }

}
