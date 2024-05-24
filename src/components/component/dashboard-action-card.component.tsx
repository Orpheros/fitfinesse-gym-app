import React from "react";
import { Modal, Space, Input, Button, TableProps } from "antd";
import { FaCirclePlus, FaWeightScale } from "react-icons/fa6";
import ModalTable from "./table.component"; // Make sure the path is correct

interface DataType {
  key: React.Key;
  weight: string;
  date: string;
}

interface DashboardActionCardProps {
  weight: number;
  bmiMessage: string;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTable: () => void;
  showModal: () => void;
  columns: TableProps<DataType>["columns"];
  dataSource: DataType[];
  blue: string;
}

const DashboardActionCard: React.FC<DashboardActionCardProps> = ({
  weight,
  bmiMessage,
  isModalOpen,
  handleOk,
  handleCancel,
  inputValue,
  setInputValue,
  handleAddTable,
  showModal,
  columns,
  dataSource,
  blue,
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
                {weight} kg
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
                {bmiMessage}
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
        maskClosable
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
