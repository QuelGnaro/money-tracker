import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageOneComponent } from 'src/app/components/initialization/page-one/page-one.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  component = PageOneComponent;
  constructor(
    private router: Router,
  ) { }

  next() {
    this.router.navigate(['/initial-config']);
    console.log('WelcomePage next');
  }
}
