import { ItemResponse } from "./ResponseInterface";

interface GenericResponse {
  items: ItemResponse[];
  pages: number;
}

export interface ItemsResponse {
  data: {
    items: GenericResponse;
  };
}

export interface ItemsByNameResponse {
  data: {
    itemsByName: GenericResponse;
  };
}

export interface ItemsByNameAndTypesResponse {
  data: {
    itemsByNameAndTypes: GenericResponse;
  };
}

export interface FetchOptions {
  body: string;
  method: "POST";
  headers: object;
}
