import React, { FunctionComponent } from "react";

interface Props {
  children: string;
  handleClick: () => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  isToggledClassName: string;
}

const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { children, handleClick, handleKeyPress, isToggledClassName } = props;
  return (
    <div
      onClick={handleClick}
      className={`sub-category-button ${isToggledClassName}`}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={-1}
    >
      {children}
    </div>
  );
}

export default Presentational;
