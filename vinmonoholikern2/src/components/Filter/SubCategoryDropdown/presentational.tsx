import React, {
  ChangeEvent,
  FunctionComponent
} from "react";
import { chevronDown, chevronUp } from "../constants";

interface Props {
  checkboxOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  chevronPath: typeof chevronDown | typeof chevronUp;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  children: JSX.Element[] | null;
  htmlLabel: string;
  isChecked: boolean;
  title: string;
  toggleDropdown: () => void;
}

const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const {
    checkboxOnChange,
    chevronPath,
    handleKeyPress,
    htmlLabel,
    isChecked,
    children,
    title,
    toggleDropdown
  } = props;

  return (
    <div>
      <span className="category-checkbox">
        <input
          type="checkbox"
          onChange={checkboxOnChange}
          checked={isChecked}
          id={htmlLabel}
        />
        <label htmlFor={htmlLabel} />
      </span>
      <span
        className="category-dropdown"
        onClick={(): void => toggleDropdown()}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={-1}
      >
        <span className="category-title">{title}</span>
        <img
          className="dropdown-chevron"
          src={chevronPath}
          alt="Open/Close sub categories"
        />
      </span>
      {children}
    </div>
  );
}

export default Presentational;
