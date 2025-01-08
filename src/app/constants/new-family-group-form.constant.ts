import { IForm } from "../interface/form.interface";

export const newFamilyGroupForm: IForm = {
  formTitle: 'new-family-group-form',
  saveBtnLabel: 'Crea',
  resetBtnLabel: '',
  formControls: [
    {
      "name": "name",
      "label": "Nome",
      "value": "",
      "placeholder": "Nome del gruppo familiare",
      "class": "",
      "type": "text",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Il nome del gruppo familiare è obbligatorio"
      }]
    },
  ]
};