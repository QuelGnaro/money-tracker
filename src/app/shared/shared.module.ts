import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { ListOfAccordionsComponent } from '../components/list-of-accordions/list-of-accordions.component';
import { ChartContainerComponent } from '../components/chart-container/chart-container.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const exports = [ReactiveFormsModule, CommonModule, FormsModule, RouterModule, IonicModule, DynamicFormComponent, ListOfAccordionsComponent, ChartContainerComponent, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogContent, MatDialogActions, MatDialogClose];

@NgModule({
  declarations: [],
  imports: [
    ...exports
  ],
  exports: [
    ...exports
  ]
})
export class SharedModule { }
