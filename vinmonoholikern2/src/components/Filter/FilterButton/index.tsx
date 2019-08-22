import React, { Dispatch, FunctionComponent, useState } from "react";
import productDropdownList from "../../../utils/CategoryTypes";
import SubCategoryDropdown from "../SubCategoryDropdown";
import { QueryAction } from "../../../interfaces/ReducerInterfaces";
import { chevronDown, chevronUp } from "../constants";
import "./FilterButton.scss";

interface Props {
  dispatchQuery: Dispatch<QueryAction>;
  filterItems: string[];
}

const FilterButton: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dispatchQuery, filterItems } = props;
  const [showFilters, setShow] = useState(false);
  const toggleShowFilter = (): void => setShow(!showFilters);
  const chevronPath = showFilters ? chevronUp : chevronDown;
  const hideFilters = showFilters ? undefined : { display: "none" };
  const toggleFilterId = showFilters
    ? "filter-head-active"
    : "filter-head-unactive";

  const toggleButtons = productDropdownList.map((dropdown): JSX.Element => (
    <SubCategoryDropdown
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

export default FilterButton;
