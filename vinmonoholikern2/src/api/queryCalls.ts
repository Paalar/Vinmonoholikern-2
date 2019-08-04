import { ITableItem } from "../interfaces/table";
import { headers, url } from "./constants";

const options = (body: string) => ({
  body: JSON.stringify({ query: body }),
  headers,
  method: "POST",
});

export const queryAllItems = (setItems: any): PromiseLike<ITableItem[]>  => {
  return fetch(url,
    options("{ items { number name type apk price abv volume range url } }"))
    .then((response) => response.json())
    .then((result) => setItems(result.data.items))
    .catch((error) => console.log(error));
};

export const queryItems = (searchText: string, setItems: any):
  PromiseLike<ITableItem[]> => {
    return fetch(url,
      options(`{ itemsByName(name: "${searchText}") { number name type apk price abv volume range url } }`))
      .then((response) => response.json())
      .then((result) => setItems(result.data.itemsByName))
      .catch((error) => console.log(error));
};

export const queryItemsWithTypes = (searchText: string, types: string[], setItems: any):
  PromiseLike<ITableItem[]> => {
  const jsonTypes = JSON.stringify(types);
  return fetch(url,
    options(`{ itemsByNameAndTypes(name: "${searchText}", types: ${jsonTypes})
      { number name type apk price abv volume range url } }`))
    .then((response) => response.json())
    .then((result) => setItems(result.data.itemsByNameAndTypes))
    .catch((error) => console.log(error));
};
