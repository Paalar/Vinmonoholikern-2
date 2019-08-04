import React, { FunctionComponent, useState } from "react";
import { ITableItem } from "../../interfaces/table";
import ItemTable from "../itemTable/presentational";
import Header from "../pageHeader/presentational";
import SearchBar from "../searchBar/presentational";
import ToggleRow from "../toggleRow/presentational";
import "./app.scss";

const App: FunctionComponent = () =>  {
  const [items, setItems] = useState<ITableItem[]>([]);
  const [filterItems, setFilterItems] = useState<string[]>([]);
  return (
    <>
      <Header />
      <div id="content">
        <SearchBar setItems={setItems} filterItems={filterItems} />
        <ToggleRow filterItems={filterItems} setFilter={setFilterItems}/>
        <p><i>Tips: Å søke med ingen tegn søker på alle varer</i></p>
        <ItemTable items={items}/>
      </div>
    </>
  );
};

export default App;
