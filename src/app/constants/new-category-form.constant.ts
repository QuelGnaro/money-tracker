import { IForm } from "../interface/form.interface";

export const newCategoryForm: IForm = {
  formTitle: 'new-categfory-form',
  saveBtnLabel: 'Crea',
  resetBtnLabel: '',
  formControls: [
    {
      "name": "name",
      "label": "Nome",
      "value": "",
      "placeholder": "Nome della categoria",
      "class": "",
      "type": "text",
      "validators": [{
        "validatorName": "required",
        "required": true,
        "message": "Il nome della categoria è obbligatorio"
      }]
    },
    {
      "name": "expenses-type",
      "label": "",
      "placeholder": "",
      "class": "d-flex justify-content-start flex-row gap-4 mx-3",
      "type": "radio",
      "radioOptions": [
        { "label": "Spese", "value": "exspense" }, { "label": "Entrate", "value": "income" }],

    },
    {
      "name": "payment",
      "label": "Spese previste",
      "placeholder": "Non selezionato",
      "class": "",
      "type": "payment",
    },
    {
      "name": "icon-name",
      "label": "Icona",
      "class": "",
      "type": "icon-selector",
    },
    {
      "name": "bg-color",
      "label": "Colore",
      "class": "",
      "type": "color-picker",
    },
  ]
};