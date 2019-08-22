import { RESET_RESPONSE, SET_RESPONSE } from "./constants";
import {
  ResponseState,
  ResponseActions
} from "../interfaces/ReducerInterfaces";

const responseReducer = (
  state: ResponseState,
  action: ResponseActions
): ResponseState => {
  const { type, payload } = action;
  switch (type) {
    case RESET_RESPONSE:
      return { pages: -1, items: [] };
    case SET_RESPONSE:
      return { ...payload };
    default:
      return state;
  }
};

export default responseReducer;
