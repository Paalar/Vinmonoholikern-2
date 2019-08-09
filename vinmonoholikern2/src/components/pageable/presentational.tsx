import React, { Dispatch } from "react";
import { FunctionComponent } from "react";
import {
  DECREMENT_PAGE,
  INCREMENT_PAGE,
  IQueryAction,
  RESET_PAGE,
  SET_PAGE,
} from "../../reducers/queryReducer";
import "./pageable.scss";
import PageableButton from "./pageableButton";

interface IProps {
  pages: number;
  dispatchPageable: Dispatch<IQueryAction>;
  pageIndex: number;
}

const BUTTONS_ON_LEFT = 4;
const BUTTONS_ON_RIGHT = 4;
const FIRST_PAGE = 1;
const SINGLE_PAGE = 1;

const Pageable: FunctionComponent<IProps> = (props: IProps) => {
  const { pages, pageIndex, dispatchPageable } = props;
  if (pageIndex - 1 > pages) {
    dispatchPageable({ type: RESET_PAGE });
    return null;
  }

  const createPageableButton =
    (action: IQueryAction, isActive: boolean, children: string, id?: string) => (
      <PageableButton
        action={action}
        id={id}
        isActive={isActive}
        onClick={dispatchPageable}
      >
        {children}
      </PageableButton>
    );

  const decrementPageIndex =
    createPageableButton({ type: DECREMENT_PAGE }, false, "Previous", "pageable-previous" );
  const incrementPageIndex =
    createPageableButton({ type: INCREMENT_PAGE }, false, "Next", "pageable-next");

  let lowerBound = 1;
  let upperBound = 1;
  if (pages !== 0) {
    lowerBound = pageIndex - (BUTTONS_ON_LEFT + 1) < FIRST_PAGE ? FIRST_PAGE : pageIndex - BUTTONS_ON_LEFT;
    upperBound = pageIndex + BUTTONS_ON_RIGHT + 1;
    if (upperBound > pages) {
      lowerBound += (pages - upperBound) + 1;
    }
    if (pageIndex - (BUTTONS_ON_LEFT + 1) < 0) {
      upperBound += -(pageIndex - BUTTONS_ON_RIGHT - 1);
    }
  }

  const pageable =
    pages !== SINGLE_PAGE
    ? createPageableRow(lowerBound, upperBound, pages, pageIndex, dispatchPageable)
    : [];

  console.log(`Lowerbound ${lowerBound}, upperbound ${upperBound}`);

  const finalPage =
    createPageableButton({ type: SET_PAGE, payload: pages }, false, `... ${pages}`, "pageable-final");
  const firstPage =
    createPageableButton({ type: SET_PAGE, payload: 1 }, false, "1 ...", "pageable-first");
  return (
    <div id="pageable-container">
      {pageIndex > 1 ? decrementPageIndex : null}
      {lowerBound > 1 ? firstPage : null}
      <div id="pageable-row">{pageable}</div>
      {upperBound <= pages ? finalPage : null}
      {pageIndex < pages ? incrementPageIndex : null}
    </div>
  );
};

const createPageableRow = (
  lowerBound: number,
  upperBound: number,
  pages: number,
  pageIndex: number,
  dispatch: Dispatch<IQueryAction>) => {
  const pageable = [];

  for (let i = lowerBound; i <= pages && i < upperBound; i++) {
    const isActive = i === pageIndex;
    const page = (
    <PageableButton
      isActive={isActive}
      onClick={dispatch}
      action={{ type: SET_PAGE, payload: i }}
    >
    {i}
    </PageableButton>);
    pageable.push(page);
  }
  return pageable;
};

export default Pageable;
