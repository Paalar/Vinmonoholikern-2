import React, { Dispatch, FunctionComponent } from "react";
import {
  DECREMENT_PAGE,
  INCREMENT_PAGE,
  RESET_PAGE,
  SET_PAGE
} from "../../../hooks/constants";
import PageableButton from "./PageableButton";
import { QueryAction } from "../../../interfaces/ReducerInterfaces";
import Presentational from "./presentational";
import "./Pageable.scss";

interface Props {
  pages: number;
  dispatchPageable: Dispatch<QueryAction>;
  pageIndex: number;
}

const BUTTONS_ON_LEFT = 4;
const BUTTONS_ON_RIGHT = 4;
const FIRST_PAGE = 1;
const SINGLE_PAGE = 1;

const createPageableRow = (
  lowerBound: number,
  upperBound: number,
  pages: number,
  pageIndex: number,
  dispatch: Dispatch<QueryAction>
): JSX.Element[] => {
  const pageable = [];

  for (let i = lowerBound; i <= pages && i < upperBound; i++) {
    const isActive = i === pageIndex;
    const page = (
      <PageableButton
        key={i}
        isActive={isActive}
        onClick={dispatch}
        action={{ type: SET_PAGE, payload: i }}
      >
        {i}
      </PageableButton>
    );
    pageable.push(page);
  }
  return pageable;
};

const Pageable: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { pages, pageIndex, dispatchPageable } = props;
  if (pageIndex - 1 > pages) {
    dispatchPageable({ type: RESET_PAGE });
    return <></>;
  }

  const createPageableButton = (
    action: QueryAction,
    isActive: boolean,
    text: string,
    id?: string
  ): JSX.Element => (
    <PageableButton
      action={action}
      id={id}
      isActive={isActive}
      onClick={dispatchPageable}
    >
      {text}
    </PageableButton>
  );

  const decrementPageIndex = createPageableButton(
    { type: DECREMENT_PAGE },
    false,
    "Previous",
    "pageable-previous"
  );
  const incrementPageIndex = createPageableButton(
    { type: INCREMENT_PAGE },
    false,
    "Next",
    "pageable-next"
  );

  let lowerBound = 1;
  let upperBound = 1;
  if (pages !== 0) {
    lowerBound =
      pageIndex - (BUTTONS_ON_LEFT + 1) < FIRST_PAGE
        ? FIRST_PAGE
        : pageIndex - BUTTONS_ON_LEFT;
    upperBound = pageIndex + BUTTONS_ON_RIGHT + 1;
    if (upperBound > pages) {
      lowerBound += pages - upperBound + 1;
    }
    if (pageIndex - (BUTTONS_ON_LEFT + 1) < 0) {
      upperBound += -(pageIndex - BUTTONS_ON_RIGHT - 1);
    }
    if (lowerBound < 1) {
      lowerBound = 1;
    }
  }

  const pageable =
    pages !== SINGLE_PAGE
      ? createPageableRow(
        lowerBound,
        upperBound,
        pages,
        pageIndex,
        dispatchPageable
      )
      : [];

  const finalPage = createPageableButton(
    { type: SET_PAGE, payload: pages },
    false,
    `... ${pages}`,
    "pageable-final"
  );
  const firstPage = createPageableButton(
    { type: SET_PAGE, payload: 1 },
    false,
    "1 ...",
    "pageable-first"
  );


  
  return (
    <Presentational
      firstPage={lowerBound > 1 ? firstPage : null}
      lastPage={upperBound <= pages ? finalPage : null}
      next={pageIndex < pages ? incrementPageIndex : null}
      previous={pageIndex > 1 ? decrementPageIndex : null}
    >
      {pageable}
    </Presentational>
  );
};

export default Pageable;
