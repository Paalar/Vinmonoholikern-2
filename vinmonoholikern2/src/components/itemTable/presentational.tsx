import React, { FunctionComponent } from "react";
import { ITableItems } from "../../interfaces/table";
import TableHeader from "../tableHeader/presentational";
import TableRow from "../tableRow/presentational";
import "./itemTable.scss";

type IProps = ITableItems;

const ItemTable: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <table id="item-table">
      <TableHeader />
      <TableRow items={props.items}/>
    </table>
  );
};

export default ItemTable;
