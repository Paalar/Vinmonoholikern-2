import React, { Dispatch, FunctionComponent, useState } from "react";
import { IQueryActions, SET_FILTER_ITEMS } from "../../reducers/queryReducer";
import { removeItem } from "../../utils/listFunctions";
import { productTypes } from "../../utils/productTypes";
import ToggleButton from "../toggleButton/presentational";
import "./toggleRow.scss";

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

interface IProps {
  dispatchQuery: (Dispatch<IQueryActions>);
  filterItems: string[];
}

const ToggleRow: FunctionComponent<IProps> = (props) => {
  const { dispatchQuery, filterItems } = props;
  const [ showFilters, setShow ] = useState(false);
  const toggleShowFilter = () => setShow(!showFilters);
  const chevronPath = showFilters ?  chevronUpPath : chevronDownPath;
  const hideFilters = showFilters ? undefined : { display: "none" };
  const toggleFilterId = showFilters ? "filter-head-active" : "filter-head-unactive";

  const toggleType = (type: string) => {
    if (filterItems.includes(type)) {
      const newFilter = removeItem(filterItems, type);
      dispatchQuery({ type: SET_FILTER_ITEMS, payload: newFilter });
    } else {
      filterItems.push(type);
      dispatchQuery({ type: SET_FILTER_ITEMS, payload: filterItems });
    }
  };
  const toggleButtons = productTypes.map((type) =>
    <ToggleButton key={type} name={type} toggleType={toggleType}/>);
  return (
    <div id="filter-container">
      <div className="filter-head" id={toggleFilterId} onClick={toggleShowFilter}>
        <h2>Varetype filter</h2>
        <img src={chevronPath} alt="open/close filter" />
      </div>
      <div id="filter-items" style={hideFilters}>
        {toggleButtons}
      </div>
    </div>
  );
};

export default ToggleRow;
