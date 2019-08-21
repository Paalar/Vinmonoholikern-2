import React, { FunctionComponent } from "react";
import { TableItem } from "../../interfaces/table";
import "./tableRow.scss";

interface Props {
  items: TableItem[];
}

const TableRow: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { items } = props;
  const body = items.map(
    (item): JSX.Element => {
      const { name, number, url, type, apk, price, abv, volume, range } = item;
      return (
        <tr className="item-table-row" key={number}>
          <td className="td-left item-name">
            <a
              className="item-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </td>
          <td className="td-left item-type">{type}</td>
          <td className="item-kpa">{apk}</td>
          <td className="item-price">{`Kr. ${price}`}</td>
          <td className="item-abv">{`${abv}%`}</td>
          <td className="item-volume">{`${volume}L`}</td>
          <td className="td-left item-range">{range}</td>
        </tr>
      );
    }
  );
  return <tbody id="item-table-body">{body}</tbody>;
};

export default TableRow;
