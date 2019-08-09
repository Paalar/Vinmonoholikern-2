export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const DECREMENT_PAGE = "DECREMENT_PAGE";
export const SET_PAGE = "SET_PAGE";
export const RESET_PAGE = "RESET_PAGE";

export const SET_QUERY_TEXT = "SET_QUERY_TEXT";

export const SET_FILTER_ITEMS = "SET_FILTER_ITEMS";

export const ENABLE_QUERY = "ENABLE_QUERY";
export const DISABLE_QUERY = "DISABLE_QUERY";

type ValidPageActions = typeof INCREMENT_PAGE | typeof DECREMENT_PAGE | typeof SET_PAGE | typeof RESET_PAGE;
type ValidQueryActions = typeof SET_QUERY_TEXT | typeof ENABLE_QUERY;
type ValidFilterActions = typeof SET_FILTER_ITEMS;

export interface IQueryAction {
  type: ValidPageActions | ValidQueryActions | ValidFilterActions;
  payload?: any;
}

export interface IQueryState {
  pageIndex: number;
  queryText: string;
  filterItems: string[];
  queried: boolean;
}

const queryReducer = (state: IQueryState, action: IQueryAction): IQueryState => {
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
