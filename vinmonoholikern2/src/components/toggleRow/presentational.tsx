import React, { FunctionComponent, useState } from "react";
import { removeItem } from "../../utils/listFunctions";
import { productTypes } from "../../utils/productTypes";
import ToggleButton from "../toggleButton/presentational";
import "./toggleRow.scss";

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

interface IProps {
  setFilter: (filterItems: string[]) => void;
  filterItems: string[];
}

const ToggleRow: FunctionComponent<IProps> = (props) => {
  const { filterItems, setFilter } = props;
  const [ showFilters, setShow ] = useState(true);
  const toggleShowFilter = () => setShow(!showFilters);
  const chevronPath = showFilters ? chevronDownPath : chevronUpPath;
  const hideFilters = showFilters ? { display: "none" } : undefined;

  const toggleType = (type: string) => {
    if (filterItems.includes(type)) {
      const newFilter = removeItem(filterItems, type);
      setFilter(newFilter);
    } else {
      filterItems.push(type);
      setFilter(filterItems);
    }
  };
  const toggleButtons = productTypes.map((type) =>
    <ToggleButton key={type} name={type} toggleType={toggleType}/>);
  return (
    <div id="toggle-row">
      <div id="toggle-filter" onClick={toggleShowFilter}>
        <h2>Filtrering</h2>
        <img src={chevronPath} alt="open/close filter" />
      </div>
      <div id="toggle-items" style={hideFilters}>
        {toggleButtons}
      </div>
    </div>
  );
};

export default ToggleRow;
