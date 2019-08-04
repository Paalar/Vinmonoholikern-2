import React, { FunctionComponent } from "react";
import { headersAlignLeft, tableHeaderValues } from "./strings";
import "./tableHeader.scss";

const headers = [
  <th className="td-left">Navn</th>,
  <th className="td-left">Type</th>,
  <th>APK</th>,
  <th>Pris</th>,
  <th>Alkoholprosent</th>,
  <th>Volum</th>,
  <th className="td-left">Bestillingsutvalg</th>,
];

const TableHeader: FunctionComponent = () => {
  const tableHeaders = tableHeaderValues.map((header) => {
    let className = "";
    if (headersAlignLeft.includes(header)) {
      className = "td-left";
    }
    return <th className={className} key={header}>{header}</th>;
  });
  return (
    <thead id="item-table-head">
      <tr>{tableHeaders}</tr>
    </thead>
  );
};

export default TableHeader;
