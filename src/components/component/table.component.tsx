import { TableProps, Table } from "antd";
import React from "react";
import { DataType } from "../interface/datatype-weight.interface";

const ModalTable: React.FC<{
  columns: TableProps<DataType>["columns"];
  data: DataType[];
}> = ({ columns, data }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
        className="border rounded"
      />
    </>
  );
};

export default ModalTable;
