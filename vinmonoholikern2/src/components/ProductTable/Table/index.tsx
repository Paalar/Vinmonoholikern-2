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
    <div id="table-div">
      <table id="item-table">
        <TableHeader />
        <TableRow items={items} />
      </table>
    </div>
  );
};

export default ItemTable;
