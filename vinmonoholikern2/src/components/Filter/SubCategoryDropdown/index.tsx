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
import Presentational from "./presentational";
import "./SubCategoryDropdown.scss";

interface Props {
  dropdown: Dropdown;
  dispatch: Dispatch<QueryAction>;
  filterItems: string[];
}

const SubCategoryDropdown: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dropdown, dispatch, filterItems } = props;
  const { name, subCategories } = dropdown;
  const [showDropdown, setDropdown] = useState(false);
  let subCategoryButtonList;

  const htmlLabel = `checkbox-${name}`;
  const selectedCategories = filterItems.filter((item): boolean => subCategories.includes(item));
  const isChecked = listContainslist(subCategories, filterItems);
  const toggleDropdown = (): void => setDropdown(!showDropdown);
  const chevronPath = showDropdown ? chevronUp : chevronDown;

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

  const checkboxOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
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

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") toggleDropdown();
  }

  subCategoryButtonList = subCategories.map((category): JSX.Element => (
    <SubCategoryButton
      active={selectedCategories.includes(category)}
      key={category}
      name={category}
      onClick={itemOnClick}
    />
  ));
  if (!showDropdown) subCategoryButtonList = null;

  return (
    <Presentational
      checkboxOnChange={checkboxOnChange}
      chevronPath={chevronPath}
      handleKeyPress={handleKeyPress}
      htmlLabel={htmlLabel}
      isChecked={isChecked}
      title={name}
      toggleDropdown={toggleDropdown}
    >
      {subCategoryButtonList}
    </Presentational>
  )
};

export default SubCategoryDropdown;
