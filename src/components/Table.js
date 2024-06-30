import React from "react";
import { Table } from "antd";

const MyTable = ({ data, columns }) => {
  return (
    <Table dataSource={data} columns={columns} className="max-w-full p-4" />
  );
};

export default MyTable;
