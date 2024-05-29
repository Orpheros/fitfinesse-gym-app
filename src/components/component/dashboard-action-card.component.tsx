import React from "react";
import { Modal, Space, Input, Button, TableProps } from "antd";
import { FaCirclePlus, FaWeightScale } from "react-icons/fa6";
import ModalTable from "./table.component"; // Make sure the path is correct
import { DataType } from "../interface/datatype-weight.interface";

interface DashboardActionCardProps {
  value: number;
  message: string;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTable: () => void;
  showModal: () => void;
  columns: TableProps<DataType>["columns"];
  dataSource: DataType[];
}

const blue = "#2E5FD4";

const DashboardActionCard: React.FC<DashboardActionCardProps> = ({
  value,
  message,
  isModalOpen,
  handleOk,
  handleCancel,
  inputValue,
  setInputValue,
  handleAddTable,
  showModal,
  columns,
  dataSource,
}) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-3 d-flex justify-content-center">
        <FaWeightScale size={60} style={{ color: blue }} />
      </div>
      <div className="col-9">
        <div className="d-flex h-100 align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {value} kg
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  margin: 0,
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                {message}
              </p>
            </div>
          </div>
          <div>
            <FaCirclePlus
              size={35}
              style={{ color: blue }}
              onClick={showModal}
            />
          </div>
        </div>
      </div>
      <Modal
        title="Weight"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        maskClosable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Input weight"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button onClick={handleAddTable} type="primary">
            +
          </Button>
        </Space.Compact>
        <div className="rounded py-2">
          <ModalTable
            columns={columns as DataType[]}
            data={dataSource as any}
          />
        </div>
      </Modal>
    </div>
  );
};

export default DashboardActionCard;