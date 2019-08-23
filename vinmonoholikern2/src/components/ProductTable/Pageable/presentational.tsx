import React, { FunctionComponent } from "react";

interface Props {
  children: JSX.Element[];
  firstPage: JSX.Element | null;
  lastPage: JSX.Element | null;
  next: JSX.Element | null;
  previous: JSX.Element | null;
}

const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { children, next, previous, lastPage, firstPage } = props;

  return (
    <div id="pageable-container">
      {previous}
      {firstPage}
      <div id="pageable-row">{children}</div>
      {lastPage}
      {next}
    </div>
  );
}

export default Presentational;
