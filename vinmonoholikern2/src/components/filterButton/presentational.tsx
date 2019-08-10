import React, { FunctionComponent } from "react";
import "./filterButton.scss";

interface IProps {
  active: boolean;
  name: string;
  onClick: (active: boolean, category: string) => void;
}

const FilterButton: FunctionComponent<IProps> = (props) => {
  const { active, name, onClick } = props;
  const handleClick = () => {
    onClick(!active, name);
  };
  const toggled = active ? "toggle-on" : "toggle-off";
  return (
    <div
      onClick={handleClick}
      className={`toggle-button ${toggled}`}>
        {name}
    </div>
  );
};

export default FilterButton;
