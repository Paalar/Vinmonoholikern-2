import React, { FunctionComponent, useState } from "react";
import "./toggleButton.scss";

interface IProps {
  name: string;
  toggleType: (type: string) => void;
}

const ToggleButton: FunctionComponent<IProps> = (props) => {
  const { name, toggleType } = props;
  const [active, setActive] = useState(false);
  const handleClick = async () => {
    await setActive(!active);
    toggleType(name);
  };
  const toggled = active ? "toggle-on" : "toggle-off";
  return (
    <div
      className={`toggle-button ${toggled}`} onClick={handleClick}>
        {name}
    </div>
  );
};

export default ToggleButton;
