import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  useState
} from "react";
import { SET_FILTER_ITEMS } from "../../../hooks/constants";
import {
  listContainslist,
  removeItem,
  removeItems
} from "../../../utils/ListUtils";
import SubCategoryButton from "../SubCategoryButton";
import { QueryAction } from "../../../interfaces/ReducerInterfaces";
import { Dropdown } from "../../../interfaces/UtilityInterfaces";
import { chevronDown, chevronUp } from "../constants";
import "./SubCategoryDropdown.scss";

interface Props {
  dropdown: Dropdown;
  dispatch: Dispatch<QueryAction>;
  filterItems: string[];
}

const SubCategoryDropdown: FunctionComponent<Props> = (props: Props): JSX.Element => {
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
  const chevron = showDropdown ? chevronUp : chevronDown;
  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") toggleDropdown(!showDropdown);
  }

  const categoryButtons = dropdown.subCategories.map((category): JSX.Element => (
    <SubCategoryButton
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

export default SubCategoryDropdown;
