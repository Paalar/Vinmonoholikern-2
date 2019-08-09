import React, { Dispatch, FunctionComponent } from "react";
import { IQueryAction } from "../../reducers/queryReducer";
import "./pageable.scss";

interface IProps {
  action: IQueryAction;
  onClick: Dispatch<IQueryAction>;
  isActive: boolean;
  id?: string;
}

const PageableButton: FunctionComponent<IProps> = (props) => {
  const { children, action, onClick, isActive, id } = props;
  return (
    <button
      id={id}
      className={`pageable-button${isActive ? " active-page" : ""}`}
      onClick={() => onClick(action)}
    >
      {children}
    </button>
  );
};

export default PageableButton;
