import React, { FunctionComponent } from "react";
import Presentational from "./presentational";
import "./SubCategoryButton.scss";

interface Props {
  active: boolean;
  name: string;
  onClick: (active: boolean, category: string) => void;
}

const SubCategoryButton: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { active, name, onClick } = props;
  const toggled = active ? "toggled-on" : "toggled-off";

  const handleClick = (): void => onClick(!active, name);

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") onClick(!active, name);
  }
  
  return (
    <Presentational
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      isToggledClassName={toggled}
    >
      {name}
    </Presentational>
  )
};

export default SubCategoryButton;
