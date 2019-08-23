import React, { FunctionComponent } from "react";
import { headersAlignLeft, tableHeaderValues } from "./constants";
import "./TableHeader.scss";

const TableHeader: FunctionComponent = (): JSX.Element => {
  const tableHeaders = tableHeaderValues.map(
    (header): JSX.Element => {
      let className = "";
      if (headersAlignLeft.includes(header)) {
        className = "td-left";
      }
      return (
        <th className={`${className} ${header.class}`} key={header.value}>
          {header.value}
        </th>
      );
    }
  );
  return (
    <thead id="item-table-head">
      <tr>{tableHeaders}</tr>
    </thead>
  );
};

export default TableHeader;
