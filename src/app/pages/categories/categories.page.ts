import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ICategory } from 'src/app/interface/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {


  categories: ICategory[] = this.categoriesService.getCategories();

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private categoriesService: CategoriesService,
    private navCtrk: NavController,

  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }

  goToNewCategory() {
    this.navCtrk.navigateForward('categories/new-category');
  }
}
