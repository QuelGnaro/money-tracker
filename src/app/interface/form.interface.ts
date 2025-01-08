export interface IForm {
  formTitle: string,
  saveBtnLabel: string,
  resetBtnLabel: string,
  formControls: IFormControl[];
}

export interface IFormControl {
  name: string;
  label: string;
  value?: string;
  options?: IOptions[];
  radioOptions?: IRadioOptions[];
  placeholder?: string;
  class: string;
  type: string;
  validators?: IValidator[];
}

export interface IValidator {
  validatorName: string;
  message: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  email?: string;
}

interface IRadioOptions {
  label: string;
  value: string;
}

interface IOptions {
  id?: number;
  value?: string;
  selected?: boolean;
}
