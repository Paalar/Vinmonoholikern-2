import React, { Dispatch } from "react";
import { FunctionComponent } from "react";
import {
  DECREMENT_PAGE,
  INCREMENT_PAGE,
  IQueryActions,
  SET_PAGE,
} from "../../reducers/queryReducer";

interface IProps {
  pages: number;
  dispatchPageable: Dispatch<IQueryActions>;
  pageIndex: number;
}

const Pageable: FunctionComponent<IProps> = (props: IProps) => {
  const { pages, pageIndex, dispatchPageable } = props;
  const pageables = [];
  const onClick = (pageNumber: number) => dispatchPageable({type: SET_PAGE, payload: pageNumber});

  const decrementPageIndex = <button onClick={() => dispatchPageable({ type: DECREMENT_PAGE })}>{"-"}</button>;
  const incrementPageIndex = <button onClick={() => dispatchPageable({ type: INCREMENT_PAGE })}>{"+"}</button>;

  const lowerBound = pageIndex - 4 < 1 ? 1 : pageIndex - 5;
  let upperBound = pageIndex + 5;
  if (pageIndex - 5 < 0) {
    upperBound += 4 - pageIndex;
  }

  for (let i = lowerBound; i <= pages && i < upperBound; i++) {
    const activePage = i === pageIndex ? { backgroundColor: "green" } : undefined;
    const page = <button style={activePage} onClick={() => onClick(i)}>{i}</button>;
    pageables.push(page);
  }

  const finalPage = <button onClick={() => onClick(pages)}>{pages}</button>;
  const firstPage = <button onClick={() => onClick(1)}>{1}</button>;
  return (
    <span>
      {pageIndex > 1 ? decrementPageIndex : null}
      {lowerBound > 2 ? firstPage : null}
      {lowerBound > 2 ? "..." : null}
      {pageables}
      {upperBound <= pages ? "..." : null}
      {upperBound <= pages ? finalPage : null}
      {pageIndex < pages ? incrementPageIndex : null}
    </span>
  );
};

export default Pageable;
