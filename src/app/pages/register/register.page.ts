import { Component, OnInit } from '@angular/core';
import { registerFormConfig } from 'src/app/constants/register-form.constant';
import { IForm } from 'src/app/interface/form.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormConfig = registerFormConfig as IForm;

  constructor() { }

  ngOnInit() {
    console.log('Register Page');
  }


  onFormSubmit(values: any): void {
    console.log('Submitted values:', values);
    // TODO: Logica specifica per il register
    this.register(values);
  }

  register(values: any): void {
    console.log('Logging in with:', values);
    //TODO: Esegui autenticazione, naviga, ecc.
  }
}
