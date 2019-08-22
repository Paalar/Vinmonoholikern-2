import { Dispatch } from "react";
import { ItemsResponse, FetchOptions, ItemsByNameResponse, ItemsByNameAndTypesResponse } from "../interfaces/api";
import { ResponseActions } from "../interfaces/ReducerInterfaces";
import { SET_RESPONSE } from "../reducers/constants";
import { headers, url } from "./constants";

const options = (body: string): FetchOptions => ({
  body: JSON.stringify({ query: body }),
  headers,
  method: "POST"
});

export const queryAllItems = (
  pageIndex: number,
  dispatch: Dispatch<ResponseActions>
): Promise<void> => fetch(url, options(`{
        items(pageNumber: ${pageIndex}, itemsPerPage: ${20}) {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`) as RequestInit)
  .then((response): Promise<ItemsResponse> => response.json())
  .then((result: ItemsResponse): void => {
    const { items } = result.data;
    dispatch({ type: SET_RESPONSE, payload: items });
  })
  .catch((error): void => console.log(error));

export const queryItems = (
  searchText: string,
  pageIndex: number,
  dispatch: Dispatch<ResponseActions>
): PromiseLike<void> => {
  return fetch(
    url,
    options(`{
        itemsByName(pageNumber: ${pageIndex}, itemsPerPage: ${20}, name: "${searchText}") {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`) as RequestInit
  )
    .then((response): Promise<ItemsByNameResponse> => response.json())
    .then((result): void => {
      const { itemsByName } = result.data;
      dispatch({ type: SET_RESPONSE, payload: itemsByName });
    })
    .catch((error): void => console.log(error));
};

export const queryItemsWithTypes = (
  searchText: string,
  pageIndex: number,
  types: string[],
  dispatch: Dispatch<ResponseActions>
): PromiseLike<void> => {
  const jsonTypes = JSON.stringify(types);
  return fetch(
    url,
    options(`{
        itemsByNameAndTypes(pageNumber: ${pageIndex}, itemsPerPage: ${20} name: "${searchText}", types: ${jsonTypes}) {
          items {
            number name type apk price abv volume range url
          },
          pages
        }
      }`) as RequestInit
  )
    .then((response): Promise<ItemsByNameAndTypesResponse>  => response.json())
    .then((result): void => {
      const { itemsByNameAndTypes } = result.data;
      dispatch({ type: SET_RESPONSE, payload: itemsByNameAndTypes });
    })
    .catch((error): void => console.log(error));
};
