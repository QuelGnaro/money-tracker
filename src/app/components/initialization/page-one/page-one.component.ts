import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageTwoComponent } from '../page-two/page-two.component';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class PageOneComponent {
  component = PageTwoComponent;
  constructor() { }



}
