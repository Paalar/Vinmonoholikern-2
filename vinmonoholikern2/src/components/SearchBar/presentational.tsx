import React, { ChangeEvent, FunctionComponent, FormEvent } from "react";

interface Props {
  handleTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  iconPath: string;
  inputText: string;
}

const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { onSubmit, inputText, iconPath, handleTextInput } = props;

  return (
    <div className="form-container">
      <form id="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="search-bar"
          placeholder="Dworek"
          onChange={handleTextInput}
          value={inputText}
        />
        <button type="submit" id="search-button">
          <img src={iconPath} alt="Search icon" />
        </button>
      </form>
    </div>
  );
};

export default Presentational;
