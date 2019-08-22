import React, { FunctionComponent } from "react";
import { TableItem } from "../../interfaces/table";
import TableHeader from "../tableHeader/presentational";
import TableRow from "../tableRow/presentational";
import "./itemTable.scss";

interface Props {
  items: TableItem[];
}

const ItemTable: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { items } = props;
  return (
    <table id="item-table">
      <TableHeader />
      <TableRow items={items} />
    </table>
  );
};

export default ItemTable;
