import React, { Dispatch, FunctionComponent } from "react";
import { QueryAction } from "../../interfaces/ReducerInterfaces";
import "./pageable.scss";

interface Props {
  action: QueryAction;
  onClick: Dispatch<QueryAction>;
  isActive: boolean;
  id?: string;
  children: string | number;
}

const PageableButton: FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const { children, action, onClick, isActive, id } = props;
  return (
    <button
      type="button"
      id={id}
      className={`pageable-button${isActive ? " active-page" : ""}`}
      onClick={(): void => onClick(action)}
    >
      {children}
    </button>
  );
};

export default PageableButton;
