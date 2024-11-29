import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../../interface/form.interface';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() form !: IForm;
  @Output() formSubmit = new EventEmitter<any>(); // Emette i valori del form
  @Output() formReset = new EventEmitter<void>(); // Emette un evento di reset


  fb = inject(FormBuilder);
  dynamicForm: FormGroup = this.fb.group({}, { updateOn: 'submit' });

  ngOnInit(): void {
    if (this.form?.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {
        let controlValidators: any[] = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
          });
        }
        // multiple checkbox management
        if (control.type === 'checkbox' && control.options) {
          const selectedValues = control.options
            .filter(option => option.selected)
            .map(option => option.value);
          formGroup[control.name] = this.fb.control(selectedValues, controlValidators);
        } else {
          formGroup[control.name] = [control.value || '', controlValidators];
        }
      });
      this.dynamicForm = this.fb.group(formGroup);
    }
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.formSubmit.emit(this.dynamicForm.value); // Passa i valori al genitore
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.dynamicForm.reset(); // Resetta il form
    this.formReset.emit(); // Notifica il reset al genitore
  }
  getValidationErrorMessage(control: IFormControl): string {
    const myControl = this.dynamicForm.get(control.name);
    let errorMessage = '';
    control.validators?.forEach((val) => {
      if (myControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string;
      }
    });
    return errorMessage;
  }

  onCheckboxChange(controlName: string, optionValue: any, event: Event): void {
    const control = this.dynamicForm.get(controlName) as FormControl;
    const selectedValues: any[] = control.value || [];
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!selectedValues.includes(optionValue)) {
        selectedValues.push(optionValue);
      }
    } else {
      const index = selectedValues.indexOf(optionValue);
      if (index > -1) {
        selectedValues.splice(index, 1);
      }
    }


    control.setValue(selectedValues);
    control.markAsTouched();
  }
}
