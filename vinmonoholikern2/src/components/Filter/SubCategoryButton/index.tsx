import React, { FunctionComponent } from "react";
import "./SubCategoryButton.scss";

interface Props {
  active: boolean;
  name: string;
  onClick: (active: boolean, category: string) => void;
}

const SubCategoryButton: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { active, name, onClick } = props;
  const handleClick = (): void => onClick(!active, name);
  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") onClick(!active, name);
  }
  const toggled = active ? "toggle-on" : "toggle-off";
  return (
    <div
      onClick={handleClick}
      className={`toggle-button ${toggled}`}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={-1}
    >
      {name}
    </div>
  );
};

export default SubCategoryButton;
