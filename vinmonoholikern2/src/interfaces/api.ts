import { TableItem } from "./table";

export interface ItemsResponse {
  data: {
    items: {
      items: TableItem[];
      pages: number;
    };
  };
}

export interface FetchOptions {
  body: string;
  method: "POST";
  headers: object;
}
