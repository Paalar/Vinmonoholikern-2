import React, { Dispatch, FunctionComponent, useState } from "react";
import { IQueryAction } from "../../reducers/queryReducer";
import { productDropdownList } from "../../utils/productTypes";
import FilterDropdown from "../filterDropDown/presentational";
import "./filterDropdownList.scss";

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

interface IProps {
  dispatchQuery: Dispatch<IQueryAction>;
  filterItems: string[];
}

const FilterDropdownList: FunctionComponent<IProps> = (props) => {
  const { dispatchQuery, filterItems } = props;
  const [ showFilters, setShow ] = useState(false);
  const toggleShowFilter = () => setShow(!showFilters);
  const chevronPath = showFilters ?  chevronUpPath : chevronDownPath;
  const hideFilters = showFilters ? undefined : { display: "none" };
  const toggleFilterId = showFilters ? "filter-head-active" : "filter-head-unactive";

  const toggleButtons = productDropdownList.map((dropdown) =>
    <FilterDropdown
      key={dropdown.name}
      dropdown={dropdown}
      filterItems={filterItems}
      dispatch={dispatchQuery}
    />);

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

export default FilterDropdownList;
