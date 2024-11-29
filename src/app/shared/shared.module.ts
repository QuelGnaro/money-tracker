import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';

const exports = [ReactiveFormsModule, CommonModule, FormsModule, RouterModule, IonicModule, DynamicFormComponent];

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
