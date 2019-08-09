import React, { ChangeEvent, Dispatch, FormEvent, FunctionComponent, useState } from "react";
import { IQueryAction, SET_QUERY_TEXT } from "../../reducers/queryReducer";
import "./searchBar.scss";

const iconPath = "./images/search_icon.svg";

interface IProps {
  dispatchQuery: Dispatch<IQueryAction>;
}

const SearchBar: FunctionComponent<IProps> = (props) => {
  const { dispatchQuery } = props;
  const [input, setInput] = useState("");

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedInput = input.trim();
    dispatchQuery({ type: SET_QUERY_TEXT, payload: parsedInput });
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
