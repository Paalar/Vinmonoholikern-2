import React, { Dispatch, FunctionComponent, useReducer } from "react";
import { queryAllItems, queryItems, queryItemsWithTypes } from "../../api/queryCalls";
import pageableReducer, { ENABLE_QUERY, IQueryState } from "../../reducers/queryReducer";
import itemResponseReducer, { IResponseState, IResponseActions } from "../../reducers/responseReducer";
import ItemTable from "../itemTable/presentational";
import Pageable from "../pageable/presentational";
import Header from "../pageHeader/presentational";
import SearchBar from "../searchBar/presentational";
import ToggleRow from "../toggleRow/presentational";
import "./app.scss";

const initialResponseState: IResponseState = {
  items: [],
  pages: 1,
};

const initalQueryState: IQueryState = {
  filterItems: [],
  pageIndex: 1,
  queried: false,
  queryText: "",
};

const query = (queryState: IQueryState, dispatch: Dispatch<IResponseActions>) => {
  const { pageIndex, filterItems, queryText } = queryState;
  if (filterItems.length > 0) {
    queryItemsWithTypes(queryText, pageIndex, filterItems, dispatch);
  } else if (queryText.length === 0) {
    queryAllItems(pageIndex, dispatch);
  } else {
    queryItems(queryText, pageIndex, dispatch);
  }
};

const App: FunctionComponent = () =>  {
  const [responseState, dispatchResponse] = useReducer(itemResponseReducer, initialResponseState);
  const [queryState, dispatchQuery] = useReducer(pageableReducer, initalQueryState);

  const { pages, items } = responseState;
  const { pageIndex, filterItems, queried } = queryState;

  if (!queried) {
    query(queryState, dispatchResponse);
    dispatchQuery({ type: ENABLE_QUERY });
  }

  const pageable = (
  <Pageable
    pages={pages}
    pageIndex={pageIndex}
    dispatchPageable={dispatchQuery}
  />);
  return (
    <>
      <Header />
      <div id="content">
        <SearchBar dispatchQuery={dispatchQuery} />
        <ToggleRow dispatchQuery={dispatchQuery} filterItems={filterItems} />
        {pageable}
        <p><i>Tips: Å søke med ingen tegn søker på alle varer</i></p>
        <ItemTable items={items} />
        {pageable}
      </div>
    </>
  );
};

export default App;
