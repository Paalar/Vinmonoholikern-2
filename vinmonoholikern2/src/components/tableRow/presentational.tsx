import React, { FunctionComponent } from "react";
import { ITableItems } from "../../interfaces/table";
import "./tableRow.scss";

type IProps = ITableItems;

const TableRow: FunctionComponent<IProps> = (props) => {
  const body = props.items.map((item) =>
    <tr className="item-table-row" key={item.number}>
      <td className="td-left item-name">
        <a className="item-link" href={item.url} target="_blank" >{item.name}</a>
      </td>
      <td className="td-left item-type">{item.type}</td>
      <td className="item-kpa">{item.apk}</td>
      <td className="item-price">Kr. {item.price}</td>
      <td className="item-abv">{item.abv}%</td>
      <td className="item-volume">{item.volume}L</td>
      <td className="td-left item-range">{item.range}</td>
    </tr>);
  return (
    <tbody id="item-table-body">
      {body}
    </tbody>
  );
};

export default TableRow;
