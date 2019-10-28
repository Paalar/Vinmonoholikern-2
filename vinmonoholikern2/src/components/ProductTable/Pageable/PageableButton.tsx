import React, { Dispatch, FunctionComponent } from "react";
import { QueryAction } from "../../../interfaces/ReducerInterfaces";
import "./Pageable.scss";

interface Props {
  action: QueryAction;
  onClick: Dispatch<QueryAction>;
  isActive: boolean;
  id?: string;
  disabled?: boolean;
  children: string | number;
}

const PageableButton: FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const { children, action, onClick, isActive, id, disabled } = props;
  return (
    <button
      type="button"
      id={id}
      className={`pageable-button${isActive ? " active-page" : ""}`}
      disabled={disabled}
      onClick={(): void => onClick(action)}
    >
      {children}
    </button>
  );
};

export default PageableButton;
