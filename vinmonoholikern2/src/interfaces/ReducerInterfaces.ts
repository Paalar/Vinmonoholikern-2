import {
  SET_RESPONSE,
  RESET_RESPONSE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  SET_PAGE,
  RESET_PAGE,
  SET_QUERY_TEXT,
  ENABLE_QUERY,
  SET_FILTER_ITEMS
} from "../reducers/constants";
import { TableItem } from "./table";

type ValidPageActions =
  | typeof INCREMENT_PAGE
  | typeof DECREMENT_PAGE
  | typeof SET_PAGE
  | typeof RESET_PAGE;
type ValidQueryActions = typeof SET_QUERY_TEXT | typeof ENABLE_QUERY;
type ValidFilterActions = typeof SET_FILTER_ITEMS;

export interface ResponseActions {
  type: typeof SET_RESPONSE | typeof RESET_RESPONSE;
  payload: ResponseState;
}

export interface ResponseState {
  pages: number;
  items: TableItem[];
}

export interface QueryAction {
  type: ValidPageActions | ValidQueryActions | ValidFilterActions;
  payload?: any;
}

export interface QueryState {
  pageIndex: number;
  queryText: string;
  filterItems: string[];
  queried: boolean;
}
