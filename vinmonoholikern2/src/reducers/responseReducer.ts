import { ITableItem } from "../interfaces/table.js";

export const SET_RESPONSE = "SET_RESPONSE";
export const RESET_RESPONSE = "RESET_RESPONSE";

export interface IResponseActions {
  type: typeof SET_RESPONSE | typeof RESET_RESPONSE;
  payload: IResponseState;
}

export interface IResponseState {
  pages: number;
  items: ITableItem[];
}

const pageableReducer = (state: IResponseState, action: IResponseActions): IResponseState => {
  const { type, payload } = action;
  switch (type) {
    case RESET_RESPONSE:
      return { pages: -1, items: []};
    case SET_RESPONSE:
      return { ...payload };
    default:
      return state;
  }
};

export default pageableReducer;
