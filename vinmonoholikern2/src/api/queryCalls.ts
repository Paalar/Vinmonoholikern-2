import { Dispatch } from "react";
import { IItemsResponse } from "../interfaces/api";
import { ITableItem } from "../interfaces/table";
import { IResponseActions, SET_RESPONSE } from "../reducers/responseReducer";
import { headers, url } from "./constants";

const options = (body: string) => ({
  body: JSON.stringify({ query: body }),
  headers,
  method: "POST",
});

export const queryAllItems =
  (pageIndex: number, dispatch: Dispatch<IResponseActions>): PromiseLike<void> => {
    return fetch(url,
      options(`{
        items(pageNumber: ${pageIndex}, itemsPerPage: ${20}) {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`))
      .then((response) => response.json())
      .then((result: IItemsResponse) => {
        const { items } = result.data;
        dispatch({type: SET_RESPONSE, payload: items});
      })
      .catch((error) => console.log(error));
  };

export const queryItems =
  (searchText: string, pageIndex: number, dispatch: Dispatch<IResponseActions>): PromiseLike<void> => {
    return fetch(url,
      options(`{
        itemsByName(pageNumber: ${pageIndex}, itemsPerPage: ${20}, name: "${searchText}") {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`))
      .then((response) => response.json())
      .then((result) => {
        const { itemsByName } = result.data;
        dispatch({ type: SET_RESPONSE, payload: itemsByName });
      })
      .catch((error) => console.log(error));
};

export const queryItemsWithTypes =
  (searchText: string, pageIndex: number, types: string[], dispatch: Dispatch<IResponseActions>)
  : PromiseLike<void> => {
    const jsonTypes = JSON.stringify(types);
    return fetch(url,
      options(`{
        itemsByNameAndTypes(pageNumber: ${pageIndex}, itemsPerPage: ${20} name: "${searchText}", types: ${jsonTypes}) {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`))
      .then((response) => response.json())
      .then((result) => {
        const { itemsByNameAndTypes } = result.data;
        dispatch({ type: SET_RESPONSE, payload: itemsByNameAndTypes });
      })
      .catch((error) => console.log(error));
  };
