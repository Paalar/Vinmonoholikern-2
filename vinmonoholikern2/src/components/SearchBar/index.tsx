import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FunctionComponent,
  useState
} from "react";
import { SET_QUERY_TEXT } from "../../hooks/constants";
import { QueryAction } from "../../interfaces/ReducerInterfaces";
import Presentational from "./presentational";
import "./SearchBar.scss";

const iconPath = "./images/search_icon.svg";

interface Props {
  dispatchQuery: Dispatch<QueryAction>;
}

const SearchBar: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { dispatchQuery } = props;
  const [inputText, setinputText] = useState("");

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;
    setinputText(text);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const parsedInput = inputText.trim();
    dispatchQuery({ type: SET_QUERY_TEXT, payload: parsedInput });
  };

  return (
    <Presentational
      inputText={inputText}
      handleTextInput={handleTextInput}
      onSubmit={onSubmit}
      iconPath={iconPath}
    />
  )
};

export default SearchBar;
