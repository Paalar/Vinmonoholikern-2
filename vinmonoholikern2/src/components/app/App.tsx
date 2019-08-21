import React, { Dispatch, FunctionComponent, useReducer } from "react";
import {
  queryAllItems,
  queryItems,
  queryItemsWithTypes
} from "../../api/queryCalls";
import pageableReducer from "../../reducers/queryReducer";
import { ENABLE_QUERY } from "../../reducers/constants";
import ResponseReducer from "../../reducers/responseReducer";
import {
  ResponseActions,
  ResponseState,
  QueryState
} from "../../interfaces/ReducerInterfaces";
import FilterDropDownList from "../filterDropDownList/presentational";
import Footer from "../footer/presentational";
import ItemTable from "../itemTable/presentational";
import Pageable from "../pageable/presentational";
import Header from "../pageHeader/presentational";
import SearchBar from "../searchBar/presentational";

import "./app.scss";

const initialResponseState: ResponseState = {
  items: [],
  pages: 1
};

const initalQueryState: QueryState = {
  filterItems: [],
  pageIndex: 1,
  queried: false,
  queryText: ""
};

const query = (queryState: QueryState, dispatch: Dispatch<ResponseActions>): void => {
  const { pageIndex, filterItems, queryText } = queryState;
  if (filterItems.length > 0) {
    queryItemsWithTypes(queryText, pageIndex, filterItems, dispatch);
  } else if (queryText.length === 0) {
    queryAllItems(pageIndex, dispatch);
  } else {
    queryItems(queryText, pageIndex, dispatch);
  }
};

const App: FunctionComponent = (): JSX.Element => {
  const [responseState, dispatchResponse] = useReducer(
    ResponseReducer,
    initialResponseState
  );
  const [queryState, dispatchQuery] = useReducer(
    pageableReducer,
    initalQueryState
  );

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
    />
  );
  return (
    <>
      <Header />
      <div id="content">
        <SearchBar dispatchQuery={dispatchQuery} />
        <p>
          <i>Tips: Å søke med ingen tegn søker på alle varer</i>
        </p>
        <FilterDropDownList
          dispatchQuery={dispatchQuery}
          filterItems={filterItems}
        />
        {pageable}
        <ItemTable items={items} />
        {pageable}
      </div>
      <Footer />
    </>
  );
};

export default App;
