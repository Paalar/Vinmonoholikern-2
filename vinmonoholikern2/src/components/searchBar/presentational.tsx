import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { queryAllItems, queryItems, queryItemsWithTypes } from "../../api/queryCalls";
import { ITableItem } from "../../interfaces/table";
import "./searchBar.scss";

const iconPath = "./images/search_icon.svg";

interface IProps {
  setItems: (items: ITableItem[]) => void;
  filterItems: string[];
}

const SearchBar: FunctionComponent<IProps> = (props) => {
  const [input, setInput] = useState("");
  const { setItems, filterItems } = props;

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedInput = input.trim();
    if (filterItems.length > 0) {
      queryItemsWithTypes(parsedInput, filterItems, setItems);
    } else if (parsedInput.length === 0) {
      queryAllItems(setItems);
    } else {
      queryItems(parsedInput, setItems);
    }
  };

  return (
    <div className="form-container">
      <form id="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="search-bar"
          placeholder="Dworek"
          onChange={handleTextInput}
          value={input}
        />
        <button type="submit" id="search-button">
        <img src={iconPath} alt="Search icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
