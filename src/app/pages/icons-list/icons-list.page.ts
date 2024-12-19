import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IconList } from 'src/app/constants/iconlist.constant';
import { ICategories } from 'src/app/interface/icon.interface';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.page.html',
  styleUrls: ['./icons-list.page.scss'],
})
export class IconsListPage {
  iconsList = IconList.categories;

  selectedIcon: { categoryIndex: number; iconName: string; } | null = null;

  constructor(
    private navCtrl: NavController,
    private iconsService: IconsService
  ) { }

  backToNewCategory() {
    this.navCtrl.navigateBack('categories/new-category');
  }

  // Controlla se l'icona corrente è selezionata
  isIconSelected(categoryIndex: number, icon: string): boolean {
    return (
      this.selectedIcon?.categoryIndex === categoryIndex &&
      this.selectedIcon?.iconName === icon
    );
  }

  // Seleziona un'icona o la deseleziona se già selezionata
  selectIcon(categoryIndex: number, icon: string): void {
    if (this.isIconSelected(categoryIndex, icon)) {
      this.selectedIcon = null; // Deseleziona
    } else {
      this.selectedIcon = { categoryIndex, iconName: icon }; // Aggiorna selezione
    }
  }

  useIcon() {
    if (this.selectedIcon !== null) {
      this.iconsService.setSelectedIcon(this.selectedIcon);
      this.navCtrl.navigateBack('categories/new-category');
    }
  }
}
