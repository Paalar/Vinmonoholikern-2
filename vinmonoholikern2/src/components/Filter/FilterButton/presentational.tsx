import React, { FunctionComponent } from "react";
import { chevronUp, chevronDown } from "../constants";

interface Props {
  chevronPath: typeof chevronUp | typeof chevronDown;
  children: JSX.Element[];
  handleKeyPress: (event: React.KeyboardEvent) => void;
  showDropdown?: object;
  isDropdownShownId: string;
  toggleShowDropdown: () => void;
}

const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const {
    chevronPath,
    handleKeyPress,
    showDropdown,
    isDropdownShownId,
    toggleShowDropdown,
    children
  } = props;

  return (
    <div id="filter-container">
      <div
        className="category-dropdown"
        id={isDropdownShownId}
        onClick={toggleShowDropdown}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={-1}
      >
        <h2>Varetype filter</h2>
        <img src={chevronPath} alt="open/close filter" />
      </div>
      <div id="category-dropdown-menu" style={showDropdown}>
        {children}
      </div>
    </div>
  )
};

export default Presentational;
