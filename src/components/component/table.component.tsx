import { TableProps, Table } from "antd";
import React from "react";

interface DataType {
  key: string;
  date: string;
  weight: string;
}

const ModalTable: React.FC<{
  columns: TableProps<DataType>["columns"];
  data: DataType[];
}> = ({ columns, data }) => {
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
    </>
  );
};

export default ModalTable;
