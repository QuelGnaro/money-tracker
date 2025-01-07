import { IForm } from "../interface/form.interface";

export const memoForm: IForm = {
  formTitle: 'Payment form',
  saveBtnLabel: 'Crea',
  resetBtnLabel: '',
  formControls: [
    {
      "name": "name",
      "label": "Nome del pagamento",
      "value": "",
      "placeholder": "",
      "class": "col",
      "type": "text",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Campo obbligatorio"
      }]
    },
    {
      "name": "frequency",
      "label": "Frequenza Promemoria",
      "placeholder": "",
      "class": "col-md-4",
      "type": "select",
      "options": [{ "id": 1, "value": "Basic" }, { "id": 2, "value": "Standard" }, { "id": 3, "value": "Premium" }],
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Package is required"
      }]
    },
    {
      "name": "auto-add",
      "label": "Aggiungi Automaticamente",
      "placeholder": "",
      "class": "col-md-4",
      "type": "checkbox",
    },
    {
      "name": "start-date",
      "label": "Data di inizio",
      "placeholder": "",
      "class": "col-md-4",
      "type": "date",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Date of Enquiry is required"
      }]
    },
    {
      "name": "hour",
      "label": "Ora",
      "placeholder": "",
      "class": "col-md-4",
      "type": "date",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "hour is required"
      }]
    },
    {
      "name": "due-date",
      "label": "Data di scadenza",
      "placeholder": "",
      "class": "col-md-4",
      "type": "date",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "due is required"
      }]
    },
    {
      "name": "account",
      "label": "Conto",
      "placeholder": "",
      "class": "col-md-4",
      "type": "select",
      "options": [{ "id": 1, "value": "Basic" }, { "id": 2, "value": "Standard" }, { "id": 3, "value": "Premium" }],
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Package is required"
      }]
    },
    {
      "name": "category",
      "label": "Categoria",
      "placeholder": "",
      "class": "col-md-4",
      "type": "select",
      "options": [{ "id": 1, "value": "Basic" }, { "id": 2, "value": "Standard" }, { "id": 3, "value": "Premium" }],
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Package is required"
      }]
    },
    {
      "name": "import",
      "label": "Importo",
      "placeholder": "",
      "class": "col-md-4",
      "type": "number",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Mobile is required"
      }]
    },
    {
      "name": "comment",
      "label": "Commento",
      "value": "",
      "placeholder": "",
      "class": "col",
      "type": "text",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Campo obbligatorio"
      }]
    },
  ]
};