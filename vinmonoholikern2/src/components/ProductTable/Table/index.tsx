import React, { FunctionComponent } from "react";
import { ItemResponse } from "../../../interfaces/ResponseInterface";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "./Table.scss";

interface Props {
  items: ItemResponse[];
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
