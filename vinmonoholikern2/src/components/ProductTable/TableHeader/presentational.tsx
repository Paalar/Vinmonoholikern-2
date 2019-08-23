import React, { FunctionComponent } from "react";

interface Props {
  children: JSX.Element[];
}
 
const Presentational: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <thead id="item-table-head">
      <tr>{children}</tr>
    </thead>
  );
};

export default Presentational;
