import React, { Dispatch, FunctionComponent, useState } from "react";
import productDropdownList from "../../../utils/CategoryTypes";
import SubCategoryDropdown from "../SubCategoryDropdown";
import { QueryAction } from "../../../interfaces/ReducerInterfaces";
import { chevronDown, chevronUp } from "../constants";
import Presentational from "./presentational";
import "./FilterButton.scss";

interface Props {
  dispatchQuery: Dispatch<QueryAction>;
  filterItems: string[];
}

const FilterButton: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dispatchQuery, filterItems } = props;
  const [showDropdown, setShow] = useState(false);
  let chevronPath: typeof chevronDown | typeof chevronUp;
  let hideFilters: undefined | object;
  let isDropdownShownId: string;
  
  if (showDropdown) {
    chevronPath = chevronUp;
    hideFilters = undefined;
    isDropdownShownId = "filter-dropdown-active";
  } else {
    chevronPath = chevronDown;
    hideFilters = { display: "none" };
    isDropdownShownId = "filter-dropdown-unactive";
  }

  const subCategoryDropdownList = productDropdownList.map((dropdown): JSX.Element => (
    <SubCategoryDropdown
      key={dropdown.name}
      dropdown={dropdown}
      filterItems={filterItems}
      dispatch={dispatchQuery}
    />
  ));

  const toggleShowDropdown = (): void => setShow(!showDropdown);

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") toggleShowDropdown();
  }

  return (
    <Presentational
      chevronPath={chevronPath}
      showDropdown={hideFilters}
      isDropdownShownId={isDropdownShownId}
      handleKeyPress={handleKeyPress}
      toggleShowDropdown={toggleShowDropdown}
    >
      {subCategoryDropdownList}
    </Presentational>
  )
};

export default FilterButton;
