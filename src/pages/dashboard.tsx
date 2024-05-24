import Layout from "../components/layout/layout";
import LoadingPage from "../components/layout/loading";
import { useGetExpense } from "../hooks/useGetExpense";
import Chart from "react-apexcharts";
import DashboardCardComponent from "../components/component/dashboard-card.component";
import { FaCirclePlus, FaWeightScale } from "react-icons/fa6";
import { useGetUser } from "../hooks/useGetUser";
import { useState } from "react";
import { Button, Input, Modal, Space } from "antd";
import DashboardActionCard from "../components/component/dashboard-action-card.component";

const DashboardPage = () => {
  const { loading } = useGetExpense();
  const { name } = useGetUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const [dataSource, setDataSource] = useState<
    { key: string; date: string; weight: string }[]
  >([]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any) => (
        <Space size="middle">
          <Button onClick={() => console.log("aaaa", _)} type="primary">
            +
          </Button>
          {/* <a onClick={() => console.log("aaaa", _)}>Delete</a> */}
        </Space>
      ),
    },
  ];

  const handleAddTable = () => {
    console.log("asdasdasd", inputValue);
    const newData = {
      key: count.toString(),
      date: new Date().toDateString(),
      weight: inputValue,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    setInputValue("");
  };

  const blue = "#2E5FD4";

  const state = {
    options: {
      stroke: {
        // curve: "smooth",
        // lineCap: "round",
      },
      grid: {
        show: true,
        padding: { left: -25, right: -25, top: -25, bottom: -25 },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "45%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "12px",
            },
            value: {
              show: true,
              fontSize: "15px",
              offsetY: 0,
            },
          },
        },
      },
      labels: ["Progress"],
    },
    series: [24],
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!loading ? (
        <Layout>
          <div className="d-flex justify-content-center">
            <div className="mt-4" style={{ width: "90%" }}>
              {/* Card Dashboard */}
              <div className="d-flex justify-content-between">
                <div
                  className="card w-100"
                  style={{
                    border: "1px solid var(--Neutral-Color-Slate-200, #DDE4EE)",
                    background: "var(--Base-Color-White, #FFF)",
                    borderRadius: "16px",
                  }}
                >
                  <div className="card-body w-full">
                    <div className="container-fluid">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <label style={{ fontSize: "22px", color: blue }}>
                              Hello, {name}
                            </label>
                            <label style={{ fontSize: "22px", color: blue }}>
                              Today Activity
                            </label>
                            <p
                              className="m-0"
                              style={{ fontSize: "12px", color: "gray" }}
                            >
                              Monday, 3 May 2024
                            </p>
                          </div>
                        </div>
                        <Chart
                          options={{
                            ...state.options,
                            stroke: {
                              ...state.options.stroke,
                              lineCap: "round",
                            },
                          }}
                          series={state.series}
                          type="radialBar"
                          width="120"
                        />
                      </div>
                      <div className="w-100 d-flex flex-column">
                        <div className="row mb-3 w-full">
                          <div
                            className="col-6 ps-0"
                            style={{ paddingRight: "7px" }}
                          >
                            <DashboardCardComponent
                              text="Calories"
                              color={blue}
                              i1
                            />
                          </div>
                          <div
                            className="col-6 pe-0"
                            style={{ paddingLeft: "7px" }}
                          >
                            <DashboardCardComponent
                              text="Steps"
                              color={blue}
                              i2
                            />
                          </div>
                        </div>
                        <div className="row w-full">
                          <div
                            className="col-6 ps-0"
                            style={{ paddingRight: "7px" }}
                          >
                            <DashboardCardComponent
                              text="Distance"
                              color={blue}
                              i3
                            />
                          </div>
                          <div
                            className="col-6 pe-0"
                            style={{ paddingLeft: "7px" }}
                          >
                            <DashboardCardComponent
                              text="Heart Rate"
                              color={blue}
                              i4
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Plan*/}
              {/* <div
                className="container-fluid mt-3 px-0"
                style={{ paddingBottom: "90px" }}
              >
                <div className="d-flex justify-content-between mb-3">
                  <label>Current Plan</label>
                  <span>View All</span>
                </div>
                <CurrentPlanComponent
                  backgroundPath="src/assets/img/image1.png"
                  label="MONDAY"
                />
              </div> */}
              <div
                className="card w-100 mt-3"
                style={{
                  border: "1px solid var(--Neutral-Color-Slate-200, #DDE4EE)",
                  background: "var(--Base-Color-White, #FFF)",
                  borderRadius: "16px",
                }}
              >
                <div className="card-body">
                  <DashboardActionCard
                    weight={70} // Example weight
                    bmiMessage="You have healthy BMI" // Example message
                    isModalOpen={isModalOpen}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleAddTable={handleAddTable}
                    showModal={showModal}
                    columns={columns}
                    dataSource={dataSource}
                    blue={blue}
                  />

                  {/* <div className="row d-flex justify-content-center">
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
                              70 kg
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
                              You have healthy BMI
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
                      <ModalTable columns={columns} data={dataSource} />
                    </div>
                  </Modal> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <LoadingPage loading={loading} />
      )}
    </>
  );
};

export default DashboardPage;
