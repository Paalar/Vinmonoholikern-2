import React, { FunctionComponent } from "react";
import { headersAlignLeft, tableHeaderValues } from "./strings";
import "./tableHeader.scss";

const TableHeader: FunctionComponent = () => {
  const tableHeaders = tableHeaderValues.map((header) => {
    let className = "";
    if (headersAlignLeft.includes(header)) {
      className = "td-left";
    }
    return (
      <th
        className={`${className} ${header.class}`}
        key={header.value}
      >
        {header.value}
    </th>
    );
  });
  return (
    <thead id="item-table-head">
      <tr>{tableHeaders}</tr>
    </thead>
  );
};

export default TableHeader;
