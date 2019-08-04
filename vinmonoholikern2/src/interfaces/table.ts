export interface ITableItem {
  name: string;
  number: number;
  apk: number;
  price: number;
  literPrice: number;
  abv: number;
  volume: number;
  url: string;
  range: string;
  type: string;
}

export interface ITableItems {
  items: ITableItem[];
}
