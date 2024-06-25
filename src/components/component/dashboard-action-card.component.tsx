import React from "react";
import { Modal, Space, Input, Button, TableProps } from "antd";
import { FaCirclePlus, FaWeightScale } from "react-icons/fa6";
import ModalTable from "./table.component"; // Make sure the path is correct
import { DataType } from "../interface/datatype-weight.interface";
import { blue, primary_blue } from "../interface/user.interface";

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
  height: string;
  setHeight: (value: string) => void;
}

const DashboardActionCard: React.FC<DashboardActionCardProps> = ({
  value,
  isModalOpen,
  message,
  handleOk,
  handleCancel,
  inputValue,
  setInputValue,
  handleAddTable,
  showModal,
  columns,
  dataSource,
  height,
  setHeight,
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
              style={{ color: primary_blue }}
              onClick={showModal}
            />
          </div>
        </div>
      </div>
      <Modal
        title="Weight & Heigth Table"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        maskClosable={false}
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <section className="mb-3">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              type="number"
              placeholder="Input height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              addonAfter="cm"
            />
            {/* <Button onClick={handleAddTable} type="primary">
              Set
            </Button> */}
          </Space.Compact>
        </section>
        <section>
          <Space.Compact style={{ width: "100%" }} className="mb-3">
            <Input
              type="number"
              placeholder="Input weight"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              addonAfter="kg"
            />
            {/* <Button onClick={handleAddTable} type="primary">
              +
            </Button> */}
          </Space.Compact>
          <Button onClick={handleAddTable} type="primary" className="mb-2">
            Add
          </Button>
          <div className="rounded py-2">
            <ModalTable
              columns={columns as DataType[]}
              data={dataSource as any}
            />
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default DashboardActionCard;
