import React, { Dispatch, FunctionComponent, useReducer } from "react";
import {
  queryAllItems,
  queryItems,
  queryItemsWithTypes
} from "../api/QueryCalls";
import QueryReducer from "../hooks/QueryReducer"
import { ENABLE_QUERY } from "../hooks/constants";
import ResponseReducer from "../hooks/ResponseReducer";
import {
  ResponseActions,
  ResponseState,
  QueryState
} from "../interfaces/ReducerInterfaces";
import FilterButton from "../components/Filter/FilterButton";
import Footer from "../components/Footer";
import ProductTable from "../components/ProductTable/Table";
import Pageable from "../components/ProductTable/Pageable";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
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
    QueryReducer,
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
        <FilterButton
          dispatchQuery={dispatchQuery}
          filterItems={filterItems}
        />
        {pageable}
        <ProductTable items={items} />
        {pageable}
      </div>
      <Footer />
    </>
  );
};

export default App;
