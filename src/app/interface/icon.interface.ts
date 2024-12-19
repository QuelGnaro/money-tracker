export interface IIcon {
  id: number;
  label: string;
}

export interface ICategories {
  categories: IIconList[],
}

export interface IIconList {
  name: string,
  icons: IIcon[];
}

