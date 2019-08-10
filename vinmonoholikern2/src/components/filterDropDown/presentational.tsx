import React, { ChangeEvent, Dispatch, FunctionComponent, useState } from "react";
import { IQueryAction, SET_FILTER_ITEMS } from "../../reducers/queryReducer";
import { listContainslist, removeItem, removeItems } from "../../utils/listFunctions";
import { IDropdown } from "../../utils/productTypes";
import FilterButton from "../filterButton/presentational";
import "./filterDropdown.scss";

interface IProps {
  dropdown: IDropdown;
  dispatch: Dispatch<IQueryAction>;
  filterItems: string[];
}

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

const FilterDropdown: FunctionComponent<IProps> = (props) => {
  const { dropdown, dispatch, filterItems } = props;
  const [showDropdown, toggleDropdown] = useState(false);

  const itemOnClick = (active: boolean, category: string) => {
    let payload;
    if (active) {
      payload = [...filterItems, category];
      dispatch({ type: SET_FILTER_ITEMS, payload });
    } else {
      payload = removeItem(filterItems, category);
      dispatch({ type: SET_FILTER_ITEMS, payload });
    }
  };

  const selectedCategories = filterItems.filter((item) => dropdown.subCategories.includes(item));

  const checkboxOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const { subCategories } = dropdown;
    let processedItems;
    if (checked) {
      processedItems = subCategories.filter((item) => subCategories.includes(item));
      dispatch({ type: SET_FILTER_ITEMS, payload: [...filterItems, ...processedItems] });
    } else {
      processedItems = removeItems(filterItems, subCategories);
      dispatch({ type: SET_FILTER_ITEMS, payload: [...processedItems] });
    }
  };

  const isChecked = listContainslist(dropdown.subCategories, filterItems);
  const chevron = showDropdown ? chevronUpPath : chevronDownPath;

  const categoryButtons = dropdown.subCategories.map((category) =>
    <FilterButton
      active={selectedCategories.includes(category)}
      key={category}
      name={category}
      onClick={itemOnClick}
    />);
  return (
    <div>
      <span className="dropdown-head">
        <span className="dropdown-checkbox">
          <input
            type="checkbox"
            onChange={checkboxOnChange}
            checked={isChecked}
            id={`checkbox-${dropdown.name}`}
          />
          <label htmlFor={`checkbox-${dropdown.name}`}></label>
        </span>
        <span
          className="dropdown-title"
          onClick={() => toggleDropdown(!showDropdown)}
        >
          <span className="dropdown-category">{dropdown.name}</span>
          <img
            className="dropdown-chevron"
            src={chevron}
            alt="Open/Close sub categories"
          />
        </span>
      </span>
      {showDropdown ? categoryButtons : null}
    </div>
  );
};

export default FilterDropdown;
