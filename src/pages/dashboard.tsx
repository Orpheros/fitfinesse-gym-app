import Layout from "../components/layout/layout";
import { useGetUser } from "../hooks/user/useGetUser";
import { useEffect, useState } from "react";
import { Button, Modal, Select, Space } from "antd";
import DashboardActionCard from "../components/component/dashboard-action-card.component";
import moment from "moment";
import { CgGym } from "react-icons/cg";
import { useGetGyms } from "../hooks/gyms/useGetGyms";
import { GiProgression } from "react-icons/gi";
import { useGetUserInfo } from "../hooks/user/useGetUserInfo";
import { IoIosArrowForward } from "react-icons/io";
import { handleSetGym } from "../hooks/user/useSetUserGym";
import { handleSetWeight } from "../hooks/user/useSetWeight";
import { useGetGymExercises } from "../hooks/gyms/useGetGymsExercises";
import ReactApexChart from "react-apexcharts";
import "../components/layout/chart.css";
import LoadingPage from "../components/layout/loading";
import { handleSetHeight } from "../hooks/user/useSetHeigth";
import { blue, primary_blue } from "../components/interface/user.interface";
import { useNavigate } from "react-router-dom";
import { getDayName } from "../assets/exercises";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenGym, setIsModalOpenGym] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [avgWeight, setAvgWeight] = useState(0);
  const [weight, setWeight] = useState([]);
  const [gymList, setGymList] = useState<any[]>([]);
  const [selectedUserGym, setSelectedUserGym] = useState({
    label: "",
    value: "",
  });
  const [chartExercise, setChartExercise] = useState<any[]>([]);
  const date = new Date();
  const currDate = moment(date).format("dddd, D MMMM YYYY");
  const { name } = useGetUser();
  const { gyms, gymsList } = useGetGyms();
  const { userData } = useGetUserInfo();
  const { userGymsListByGym } = useGetGymExercises();
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const bmiHealth =
    bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal" : "Overweight";

  useEffect(() => {
    console.log("debug");
    const getUser = () => {
      if (userData) {
        const userWeight = userData.weight ? JSON.parse(userData.weight) : null;
        setWeight(userWeight);
        setHeight(userData.height as any);
        if (Array.isArray(userWeight)) {
          const avgWeight = userWeight.reduce((acc: any, curr: any) => {
            return acc + parseInt(curr.weight);
          }, 0);
          if (userWeight.length > 0) {
            const w = userWeight
              ? userWeight[0].weight / (Number(userData.height) / 100) ** 2
              : 0;
            setBmi(w);
            setAvgWeight(avgWeight / userWeight.length);
          }
          setAvgWeight(avgWeight / userWeight.length);
        }
      }
    };

    const getGym = () => {
      if (gyms.length > 0) {
        const res = gymsList.map((el: any) => {
          return {
            label: el.gym_name,
            value: el.gym_id,
          };
        });
        setGymList(res);
      }
    };

    const getGymList = () => {
      const res = userGymsListByGym.map((el: any) => {
        const date = el.timestamp.toDate();

        const dayNumber = date.getDate();
        const monthName = date.toLocaleDateString("en-US", { month: "long" });
        const formattedDayNumber = dayNumber < 10 ? "0" + dayNumber : dayNumber;
        const x = `${formattedDayNumber} ${monthName}`;
        const user_exercise = JSON.parse(el.user_exercise);
        const reps = user_exercise.reduce((acc: any, el: any) => {
          if (Array.isArray(el.reps)) {
            const repsSum = el.reps.reduce((innerAcc: any, curr: any) => {
              return innerAcc + curr.reps;
            }, 0);
            return acc + repsSum;
          }
          return acc;
        }, 0);
        return { x, y: reps };
      });
      setChartExercise(res);
    };

    const fetchData = async () => {
      await Promise.all([getUser(), getGym(), getGymList()]).then(() => {
        setLoading(false);
      });
    };
    fetchData();
  }, [userGymsListByGym]);

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
          <Button
            onClick={() => handleDeleteTable(_.key)}
            type="primary"
            danger
          >
            x
          </Button>
          {/* <a onClick={() => console.log("aaaa", _)}>Delete</a> */}
        </Space>
      ),
    },
  ];

  const handleAddTable = () => {
    if (inputValue === "") return;
    const newData = {
      key: count.toString(),
      date: new Date().toDateString(),
      weight: inputValue,
    };
    if (weight) {
      handleSetWeight(userData.user_id, [newData, ...weight]);
    } else {
      handleSetWeight(userData.user_id, [newData]);
    }
    // setDataSource([newData, ...dataSource]);

    setCount(count + 1);
    setInputValue("");
  };

  const handleDeleteTable = (key: string) => {
    const userWeight = userData.weight ? JSON.parse(userData.weight) : null;
    const newData = userWeight.filter((el: any) => el.key !== key);
    handleSetWeight(userData.user_id, newData);
  };

  const handleNavigateDaily = () => {
    const currDate = new Date();
    const today = getDayName(currDate.getDay());
    navigate(`/exercise/list/daily_${today}`);
  };

  // const state = {
  //   options: {
  //     colors: [blue],
  //     stroke: {
  //       // curve: "smooth",
  //       // lineCap: "round",
  //     },
  //     grid: {
  //       show: true,
  //       padding: { left: -25, right: -25, top: -25, bottom: -25 },
  //     },
  //     plotOptions: {
  //       radialBar: {
  //         hollow: {
  //           size: "45%",
  //         },
  //         dataLabels: {
  //           name: {
  //             show: true,
  //             fontSize: "12px",
  //           },
  //           value: {
  //             show: true,
  //             fontSize: "15px",
  //             offsetY: 0,
  //           },
  //         },
  //       },
  //     },
  //     labels: ["Progress"],
  //   },
  //   series: [24],
  // };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const userWeight = userData.weight ? JSON.parse(userData.weight) : null;
    // console.log("heig", userWeight[0].weight);
    handleSetHeight(userData.user_id, height);
    if (userWeight) {
      const bmi = userWeight.length
        ? userWeight[0].weight / (Number(height) / 100) ** 2
        : 0;
      console.log("bmi", bmi);
      setBmi(bmi);
      setInputValue("");
    }
    // handleSetHeight(userData.user_id, );
    // handleSetWeight(userData.user_id, dataSource);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalGym = () => {
    setIsModalOpenGym(true);
  };

  const handleOkGym = () => {
    handleSetGym(userData.user_id, selectedUserGym).then(() => {
      setIsModalOpenGym(false);
    });
  };

  const handleCancelGym = () => {
    setIsModalOpenGym(false);
  };

  const stateChart = {
    series: [
      {
        name: "Reps",
        data: chartExercise.slice(0, 3),
      },
    ],
    options: {
      colors: [blue],
      chart: {
        // colors: blue,
        // type: "bar",
        height: 350,
        width: 100,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        scroller: {
          enabled: true,
          type: "x",
          height: 20,
        },
      },

      tooltip: {
        x: {
          format: "dd MMMM",
        },
      },
    },
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Layout>
        <div
          className="d-flex justify-content-center"
          style={{
            marginBottom: "5rem",
          }}
        >
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
                        <div className="d-flex flex-column">
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
                            {currDate}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button
                          style={{ backgroundColor: primary_blue }}
                          className="h-100 text-white"
                          onClick={handleNavigateDaily}
                        >
                          Daily<br></br> Exercise
                        </Button>
                      </div>
                    </div>
                    {chartExercise.length > 0 && (
                      <div id="chart" style={{ overflowX: "auto" }}>
                        <ReactApexChart
                          className="chart"
                          // style={{ width: "500px" }}
                          options={{
                            ...stateChart.options,
                            stroke: {
                              lineCap: "round",
                              curve: "smooth",
                            },
                            plotOptions: {
                              bar: {
                                borderRadius: 0,
                                // borderRadiusApplication: "end",
                                // borderRadiusWhenStacked: "last"
                                horizontal: false,
                              },
                            },
                            xaxis: {
                              type: "category",
                              labels: {
                                rotate: -90,
                              },
                            },
                          }}
                          series={stateChart.series}
                          type="bar"
                          height={350}
                        />
                      </div>
                    )}
                    {/* <div className="w-100 d-flex flex-column">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Current Plan*/}
            <section className="row">
              <div className="col-6">
                <div
                  className="card mt-3"
                  style={{
                    border: "1px solid var(--Neutral-Color-Slate-200, #DDE4EE)",
                    background: "var(--Base-Color-White, #FFF)",
                    borderRadius: "16px",
                  }}
                >
                  <div className="card-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-3">
                        <CgGym size={40} style={{ color: blue }} />
                      </div>
                      <div className="col-9 d-flex align-items-center justify-content-between">
                        <div className="ms-2">
                          <div>
                            <p
                              style={{
                                fontSize: "0.8rem",
                                margin: 0,
                                color: "gray",
                              }}
                            >
                              Gym
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "bold",
                                margin: 0,
                              }}
                            >
                              {gyms[0]?.gym_name}
                            </p>
                          </div>
                        </div>
                        <div>
                          <IoIosArrowForward
                            size={20}
                            style={{ color: blue }}
                            onClick={showModalGym}
                          />
                        </div>
                      </div>
                    </div>
                    <Modal
                      title="Change gym"
                      centered
                      open={isModalOpenGym}
                      onOk={handleOkGym}
                      onCancel={handleCancelGym}
                    >
                      <section>
                        <span>Gym</span>
                        <Select
                          placeholder="Select gym"
                          className="w-100"
                          allowClear
                          options={gymList}
                          onChange={(val) => setSelectedUserGym(val)}
                        />
                      </section>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="card mt-3"
                  style={{
                    border: "1px solid var(--Neutral-Color-Slate-200, #DDE4EE)",
                    background: "var(--Base-Color-White, #FFF)",
                    borderRadius: "16px",
                  }}
                >
                  <div className="card-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-3">
                        <GiProgression size={40} style={{ color: blue }} />
                      </div>
                      <div className="col-9 d-flex align-items-center justify-content-between">
                        <div className="ms-2">
                          <div>
                            <p
                              style={{
                                fontSize: "0.8rem",
                                margin: 0,
                                color: "gray",
                              }}
                            >
                              Progress
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "bold",
                                margin: 0,
                              }}
                            >
                              {userData?.loyalty_points
                                ? userData.loyalty_points
                                : 0}{" "}
                              / {userData?.max_progress || "-"}
                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <IoIosArrowForward
                            size={20}
                            style={{ color: blue }}
                            onClick={showModal}
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="card w-100 mt-3"
              style={{
                border: "1px solid var(--Neutral-Color-Slate-200, #DDE4EE)",
                background: "var(--Base-Color-White, #FFF)",
                borderRadius: "16px",
              }}
            >
              <div className="card-body">
                <DashboardActionCard
                  value={Number(avgWeight.toFixed(2)) || 0}
                  // message={`BMI: ${bmi.toFixed(2) || "Not available"}`}
                  message={`BMI: ${
                    bmiHealth ? bmiHealth : "Not available"
                  } (${bmi.toFixed(2)})`}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleAddTable={handleAddTable}
                  showModal={showModal}
                  columns={columns}
                  dataSource={weight}
                  isModalOpen={isModalOpen}
                  height={height}
                  setHeight={setHeight}
                />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
