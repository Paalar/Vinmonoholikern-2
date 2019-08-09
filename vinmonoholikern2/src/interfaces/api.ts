import { ITableItem } from "./table";

export interface IItemsResponse {
  data: {
    items: {
      items: ITableItem[],
      pages: number,
    };
  };
}
