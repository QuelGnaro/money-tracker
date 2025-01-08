import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newCategoryForm } from 'src/app/constants/new-category-form.constant';
import { ICategory } from 'src/app/interface/category.interface';
import { IForm } from 'src/app/interface/form.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss'],
})
export class NewCategoryPage implements OnInit {
  newCategoryForm = newCategoryForm as IForm;
  defaultCategories: ICategory[] = [];

  currency!: string;
  constructor(
    private navCtrl: NavController,
    private categoriesService: CategoriesService,
    private appStateService: AppStateService,
  ) { }

  ngOnInit() {
    this.currency = this.appStateService.getSelectedCurrency().iso;
    console.log('Valuta selezionata:', this.currency);

  }


  backToCategories() {
    this.navCtrl.navigateBack('/categories');
  }

  goToIconList() {
    this.navCtrl.navigateForward('/icons-list');
  }

}
