import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { loginForm } from 'src/app/constants/login-form.constant';
import { IForm } from 'src/app/interface/form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = loginForm as IForm;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('Login Page');
  }

  // TODO: implement auth service guard to protect routes
  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
    // Logica specifica per il login
    this.login(values);
  }

  login(values: any): void {
    console.log('Logging in with:', values);
    // Esegui autenticazione, naviga, ecc.
  }


  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
