import {
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  SET_PAGE,
  RESET_PAGE,
  SET_QUERY_TEXT,
  ENABLE_QUERY,
  SET_FILTER_ITEMS
} from "./constants";
import { QueryState, QueryAction } from "../interfaces/ReducerInterfaces";

const queryReducer = (state: QueryState, action: QueryAction): QueryState => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_PAGE:
      return { ...state, queried: false, pageIndex: state.pageIndex + 1 };
    case DECREMENT_PAGE:
      return { ...state, queried: false, pageIndex: state.pageIndex - 1 };
    case SET_PAGE:
      return { ...state, queried: false, pageIndex: payload };
    case RESET_PAGE:
      return { ...state, queried: false, pageIndex: 1 };
    case SET_QUERY_TEXT:
      return { ...state, queried: false, queryText: payload };
    case SET_FILTER_ITEMS:
      return { ...state, filterItems: payload };
    case ENABLE_QUERY:
      return { ...state, queried: true };
    default:
      return state;
  }
};

export default queryReducer;
