import React, { Dispatch, FunctionComponent, useState } from "react";
import { productDropdownList } from "../../utils/productTypes";
import FilterDropdown from "../filterDropDown/presentational";
import { QueryAction } from "../../interfaces/ReducerInterfaces";
import "./filterDropdownList.scss";

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

interface Props {
  dispatchQuery: Dispatch<QueryAction>;
  filterItems: string[];
}

const FilterDropdownList: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dispatchQuery, filterItems } = props;
  const [showFilters, setShow] = useState(false);
  const toggleShowFilter = (): void => setShow(!showFilters);
  const chevronPath = showFilters ? chevronUpPath : chevronDownPath;
  const hideFilters = showFilters ? undefined : { display: "none" };
  const toggleFilterId = showFilters
    ? "filter-head-active"
    : "filter-head-unactive";

  const toggleButtons = productDropdownList.map((dropdown): JSX.Element => (
    <FilterDropdown
      key={dropdown.name}
      dropdown={dropdown}
      filterItems={filterItems}
      dispatch={dispatchQuery}
    />
  ));

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") toggleShowFilter();
  }

  return (
    <div id="filter-container">
      <div
        className="filter-head"
        id={toggleFilterId}
        onClick={toggleShowFilter}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={-1}
      >
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
