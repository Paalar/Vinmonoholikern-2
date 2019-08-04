import React, { FunctionComponent } from "react";
import { ITableItems } from "../../interfaces/table";
import "./tableRow.scss";

type IProps = ITableItems;

const TableRow: FunctionComponent<IProps> = (props) => {
  const body = props.items.map((item) =>
    <tr className="item-table-row" key={item.number}>
      <td className="td-left">
        <a className="item-link" href={item.url} target="_blank" >{item.name}</a>
      </td>
      <td className="td-left">{item.type}</td>
      <td>{item.apk}</td>
      <td>Kr. {item.price}</td>
      <td>{item.abv}%</td>
      <td>{item.volume}L</td>
      <td className="td-left">{item.range}</td>
    </tr>);
  return (
    <tbody id="item-table-body">
      {body}
    </tbody>
  );
};

export default TableRow;
