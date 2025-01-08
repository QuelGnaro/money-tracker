import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../../interface/form.interface';
import { IonicModule, NavController } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IIcon } from 'src/app/interface/icon.interface';
import { defaultIcons } from 'src/app/constants/default-icon-list.constant';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule,],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() form !: IForm;
  @Input() currency !: string;
  @Output() formSubmit = new EventEmitter<any>(); // Emette i valori del form
  @Output() formReset = new EventEmitter<void>(); // Emette un evento di reset



  fb = inject(FormBuilder);
  dynamicForm: FormGroup = this.fb.group({}, { updateOn: 'submit' });

  constructor(
    private navCtrl: NavController,
    private appStateService: AppStateService,
  ) { }

  get defaultIcons(): IIcon[] {
    return defaultIcons;
  }

  get selectedColors(): string[] {
    return this.appStateService.getColors();
  }


  selectedIcon: string | null = null;
  selectedColor: string | null = null;
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
      this.formSubmit.emit(this.dynamicForm.value);
      console.log('Form is valid', this.dynamicForm.value);
      // Passa i valori al genitore
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

  goToIconList() {
    this.navCtrl.navigateForward('/icons-list');
  }

  // Controlla se l'icona corrente è selezionata
  isIconSelected(label: string): boolean {
    return this.selectedIcon === label;
  }

  // Seleziona un'icona o la deseleziona se già selezionata
  selectIcon(label: string): void {
    if (this.isIconSelected(label)) {
      this.selectedIcon = null; // Deseleziona
      this.dynamicForm.get('icon-name')?.setValue(null);
    } else {
      this.selectedIcon = label; // Aggiorna selezione
      this.dynamicForm.get('icon-name')?.setValue(label);
    }
  }

  isColorSelected(hex: string): boolean {
    return this.selectedColor === hex;
  }

  selectColor(hex: string): void {
    if (this.isColorSelected(hex)) {
      this.selectedColor = null;
      this.dynamicForm.get('bg-color')?.setValue(null);
    } else {
      this.selectedColor = hex;
      this.dynamicForm.get('bg-color')?.setValue(hex);
    }
  }

  // Funzione per calcolare il colore di contrasto
  getContrastColor(hex: string): string {
    // Convert HEX in valori RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calcola la luminosità
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

    // Restituisce bianco o nero in base alla luminosità
    return brightness > 128 ? '#000000' : '#FFFFFF';
  }
}
