import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  useState
} from "react";
import { SET_FILTER_ITEMS } from "../../reducers/constants";
import {
  listContainslist,
  removeItem,
  removeItems
} from "../../utils/listFunctions";
import FilterButton from "../filterButton/presentational";
import { QueryAction } from "../../interfaces/ReducerInterfaces";
import { Dropdown } from "../../interfaces/UtilityInterfaces";
import "./filterDropdown.scss";

interface Props {
  dropdown: Dropdown;
  dispatch: Dispatch<QueryAction>;
  filterItems: string[];
}

const chevronUpPath = "./images/chevron_up.svg";
const chevronDownPath = "./images/chevron_down.svg";

const FilterDropdown: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dropdown, dispatch, filterItems } = props;
  const [showDropdown, toggleDropdown] = useState(false);

  const itemOnClick = (active: boolean, category: string): void => {
    let payload;
    if (active) {
      payload = [...filterItems, category];
      dispatch({ type: SET_FILTER_ITEMS, payload });
    } else {
      payload = removeItem(filterItems, category);
      dispatch({ type: SET_FILTER_ITEMS, payload });
    }
  };

  const selectedCategories = filterItems.filter((item): boolean => dropdown.subCategories.includes(item));

  const checkboxOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
    const { subCategories } = dropdown;
    let processedItems;
    if (checked) {
      processedItems = subCategories.filter((item): boolean =>
        subCategories.includes(item)
      );
      dispatch({
        type: SET_FILTER_ITEMS,
        payload: [...filterItems, ...processedItems]
      });
    } else {
      processedItems = removeItems(filterItems, subCategories);
      dispatch({ type: SET_FILTER_ITEMS, payload: [...processedItems] });
    }
  };

  const isChecked = listContainslist(dropdown.subCategories, filterItems);
  const chevron = showDropdown ? chevronUpPath : chevronDownPath;
  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") toggleDropdown(!showDropdown);
  }

  const categoryButtons = dropdown.subCategories.map((category): JSX.Element => (
    <FilterButton
      active={selectedCategories.includes(category)}
      key={category}
      name={category}
      onClick={itemOnClick}
    />
  ));
  const htmlLabel = `checkbox-${dropdown.name}`;
  return (
    <div>
      <span className="dropdown-head">
        <span className="dropdown-checkbox">
          <label htmlFor={htmlLabel}>
            <input
              type="checkbox"
              onChange={checkboxOnChange}
              checked={isChecked}
              id={htmlLabel}
            />
          </label>
        </span>
        <span
          className="dropdown-title"
          onClick={(): void => toggleDropdown(!showDropdown)}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={-1}
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
