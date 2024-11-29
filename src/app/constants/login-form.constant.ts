import { IForm } from "../interface/form.interface";

export const loginForm: IForm = {
  formTitle: 'Login form',
  saveBtnLabel: 'Login',
  resetBtnLabel: '',
  formControls: [
    {
      "name": "email",
      "label": "Email",
      "value": "",
      "placeholder": "",
      "class": "col-md-4",
      "type": "email",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Email is required"
      },
      {
        "validatorName": "pattern",
        "required": true,
        "message": "Email is invalid",
        "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      }]
    },
    {
      "name": "password",
      "label": "Password",
      "value": "",
      "placeholder": "",
      "class": "col-md-4",
      "type": "password",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Password is required"
      }]
    },
  ]
};