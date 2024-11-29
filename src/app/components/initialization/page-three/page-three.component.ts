import { Component, OnInit } from '@angular/core';
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

  constructor() { }


}
