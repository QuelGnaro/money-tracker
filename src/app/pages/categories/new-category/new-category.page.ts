import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICategory } from 'src/app/interface/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss'],
})
export class NewCategoryPage {

  defaultCategories: ICategory[] = [];

  constructor(
    private navCtrl: NavController,
    private categoriesService: CategoriesService,
  ) { }


  backToCategories() {
    this.navCtrl.navigateBack('/categories');
  }

  goToIconList() {
    this.navCtrl.navigateForward('/icons-list');
  }

}
