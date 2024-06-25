import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { exercises, populateDailyWorkout } from "../assets/exercises/index";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Drawer, Empty, Input, Modal, Space } from "antd";
import React from "react";
import { capitalizeWords, formatTime } from "../helper/formating-helper";
import {
  DownOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Stopwatch from "../components/component/stopwatch/stopwatch";
import { useAddGymExercises } from "../hooks/gyms/useAddGymsExercises";
import { useGetGymExercises } from "../hooks/gyms/useGetGymsExercises";
import { Time } from "../components/interface/time.interface";
import Swal from "sweetalert2";
import LoadingPage from "../components/layout/loading";

interface ExerciseCategory {
  [key: string]: {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
  }[];
}

interface Reps {
  weight: number | null;
  reps: number | null;
}

const ExerciseListPage = () => {
  const { category } = useParams();
  const { addOrUpdateExercises } = useAddGymExercises();
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState<any>(null);
  const categoryExercises = (exercises as ExerciseCategory)[category || ""];
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = React.useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [loadingExercise, setLoadingExercise] = useState(true);
  const [exerciseTimes, setExerciseTimes] = useState<
    { exercise_id: string; exercise_name: string; time: Time; reps: [] }[]
  >([]);
  const [currentState, setCurrentState] = useState("START");
  const [reps, setReps] = useState<Reps>({ weight: null, reps: null });
  const [repsArr, setRepsArr] = useState<any>([]);
  const { loading, userGymsByDate } = useGetGymExercises();
  const currDate = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    if (userGymsByDate.length == 0) return;
    const data = JSON.parse(userGymsByDate[0].user_exercise);
    console.log("user gym", userGymsByDate);
    setExerciseTimes(data);
  }, [userGymsByDate]);

  const variation = {
    chest: 4,
    back: 4,
    leg: 4,
    upper_arm: 4,
    shoulder: 4,
    lower_arm: 4,
    cardio: 4,
  };

  useEffect(() => {
    const fetchDailyWorkout = () => {
      setLoadingExercise(true);
      populateDailyWorkout(exercises, variation, currDate, currDate.getDay());
      setLoadingExercise(false);
    };

    fetchDailyWorkout();
  }, []);

  const showDrawer = (category: any) => {
    let exercise;
    let categoryExercise;
    if (userGymsByDate.length != 0) {
      exercise = JSON.parse(userGymsByDate[0]?.user_exercise);
      categoryExercise = exercise.findIndex(
        (el: any) => el.exercise_id == category.id
      );
    }
    if (categoryExercise == -1 || categoryExercise == undefined) {
      // not found user havent open
      setCurrentState("START");
      setExercise(category);
      setOpen(true);
    } else if (categoryExercise != -1) {
      Swal.fire({
        title: "Do you want continue progress?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Continue",
        denyButtonText: `Reset`,
      }).then((result) => {
        if (result.isConfirmed) {
          setCurrentState("START");
          const idx = exerciseTimes.find(
            (el: any) => el.exercise_id == category.id
          );
          console.log("cart", idx?.reps);
          setRepsArr(idx?.reps);
          setCurrentTime(idx?.time as Time);
          setExercise(category);
          setOpen(true);
        } else if (result.isDenied) {
          const data = JSON.parse(userGymsByDate[0].user_exercise);
          const idx = data.findIndex(
            (el: any) => el.exercise_id == category.id
          );
          if (idx !== -1) {
            data.splice(idx, 1);
          }
          addOrUpdateExercises(data);
        } else {
          setOpen(false);
        }
      });
    } else {
      setCurrentState("START");
      setExercise(category);
      setOpen(true);
    }
  };

  const onClose = () => {
    setCurrentState("RESET");
    if (exercise) {
      const existingEntryIndex = exerciseTimes.findIndex(
        (entry) => entry.exercise_id === exercise.id
      );

      if (existingEntryIndex !== -1) {
        // update
        console.log("repsarrupdate", repsArr);
        const updatedExerciseTimes = [...exerciseTimes];
        updatedExerciseTimes[existingEntryIndex] = {
          exercise_id: exercise.id,
          exercise_name: exercise.name,
          time: currentTime,
          reps: repsArr,
        };
        setExerciseTimes(updatedExerciseTimes);
        addOrUpdateExercises(updatedExerciseTimes);
        setRepsArr([]);
        // updateLocalStorage(updatedExerciseTimes);
      } else {
        console.log("repsarrelse", repsArr);
        const newTimes = [
          ...exerciseTimes,
          {
            exercise_id: exercise.id,
            exercise_name: exercise.name,
            time: currentTime,
            reps: repsArr,
          },
        ];
        setExerciseTimes(newTimes);
        addOrUpdateExercises(newTimes);
        setRepsArr([]);
        // updateLocalStorage(newTimes);
      }
      setOpen(false);
    }
  };

  const toggleSection = (equipment: string) => {
    setCollapsedSections((prev: any) => ({
      ...prev,
      [equipment]: !prev[equipment],
    }));
  };

  if (!categoryExercises) {
    return (
      <Layout>
        <div style={{ marginBottom: "5rem" }}>
          {/* <div>Category not found</div> */}
          <Empty
            imageStyle={{ height: 300 }}
            style={{ fontSize: "1.8rem" }}
            description={<span>Category not Found</span>}
          />
          <Button
            type="primary"
            size="large"
            block
            onClick={() => navigate("/exercise")}
          >
            Back
          </Button>
        </div>
      </Layout>
    );
  }
  const groupExercisesByEquipment = (exercises: any) => {
    return exercises.reduce((acc: any, exercise: any) => {
      const equipment = exercise.equipment || "Other";
      if (!acc[equipment]) {
        acc[equipment] = [];
      }
      acc[equipment].push(exercise);
      return acc;
    }, {});
  };
  const groupedExercises = groupExercisesByEquipment(categoryExercises || []);

  if (loading || loadingExercise) {
    return <LoadingPage />;
  }

  return (
    <Layout>
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        {Object.keys(groupedExercises).map((equipment) => (
          <div key={equipment}>
            <section
              className="d-flex justify-content-between align-items-center m-4"
              onClick={() => toggleSection(equipment)}
            >
              <h5>{capitalizeWords(equipment)}</h5>
              {collapsedSections[equipment] ? (
                <DownOutlined />
              ) : (
                <DownOutlined rotate={180} />
              )}
            </section>
            <hr className="m-4" />
            {!collapsedSections[equipment] &&
              groupedExercises[equipment].map((a: any) => (
                <React.Fragment key={a.id}>
                  <div className="card m-4" onClick={() => showDrawer(a)}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img
                            src={a.gifUrl}
                            alt={a.name}
                            style={{ height: "4rem" }}
                          />
                        </div>
                        <div className="col-9">
                          <div>{capitalizeWords(a.name)}</div>
                          {exerciseTimes.find(
                            (ex) => ex.exercise_id === a.id.toString()
                          ) && (
                            <div>
                              {formatTime(
                                exerciseTimes.find(
                                  (ex) => ex.exercise_id === a.id.toString()
                                )?.time ?? a.time
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        ))}
        {/* <div className="m-4">
          <Button block type="primary" size="large" onClick={handleFinish}>
            Finish
          </Button>
        </div> */}
      </div>
      {exercise && (
        <Drawer
          title={capitalizeWords(exercise.name)}
          onClose={() => {
            setCurrentState("RESET"), setOpen(false), setRepsArr([]);
          }}
          open={open}
          // closable={false}
          width="100vw"
          placement="left"
          zIndex={9999}
          extra={
            <Space>
              {/* <Button onClick={onClose}>Cancel</Button> */}
              <Button type="primary" onClick={onClose}>
                Finish
              </Button>
            </Space>
          }
        >
          {exercise ? (
            <>
              <div>
                <img
                  className="border mb-4"
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  style={{ width: "100%", borderRadius: "12px" }}
                />
                <div className="d-flex justify-content-between mb-4">
                  <QuestionCircleOutlined
                    style={{ fontSize: "2rem" }}
                    onClick={() => setModalOpen(true)}
                  />

                  <h6 className="d-flex align-items-center mb-0">
                    <Stopwatch
                      currentTime={currentTime}
                      setCurrentTime={setCurrentTime}
                      currentState={currentState}
                      setCurrentState={setCurrentState}
                    />
                  </h6>
                  <ClockCircleOutlined
                    style={{ fontSize: "2rem" }}
                    onClick={() => console.log(currentTime)}
                  />
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        {/* weigth */}
                        <Input
                          type="number"
                          style={{
                            fontSize: "2.5rem",
                            textAlign: "center",
                          }}
                          value={Number(reps.weight)}
                          onChange={(e) =>
                            setReps({ ...reps, weight: Number(e.target.value) })
                          }
                        ></Input>
                      </div>
                      <div className="col-4">
                        {/* reps */}
                        <Input
                          type="number"
                          style={{
                            fontSize: "2.5rem",
                            textAlign: "center",
                          }}
                          value={Number(reps.reps)}
                          onChange={(e) =>
                            setReps({ ...reps, reps: Number(e.target.value) })
                          }
                        ></Input>
                      </div>
                      <div className="col-4">
                        <Button
                          className="h-100 w-100 align-items-center"
                          onClick={() => {
                            setRepsArr([...repsArr, reps]);
                            setReps({ weight: 0, reps: 0 });
                          }}
                        >
                          <PlusOutlined
                            style={{
                              fontSize: "2.5rem",
                            }}
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {repsArr.map((item: any, index: number) => (
                  <div key={index} className="card mt-2 my-3">
                    <div className="card-body">
                      <div className="row">
                        <h4 className="col-2 mb-0 d-flex justify-content-center align-items-center">
                          {index + 1}.
                        </h4>
                        <div className="col-5 ">
                          <div className="d-flex flex-column">
                            <p
                              className="m-0 p-0 text-center"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Weight
                            </p>
                            <h1 className="m-0 p-0 text-center">
                              {item.weight}
                            </h1>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="d-flex flex-column">
                            <p
                              className="m-0 p-0 text-center"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Reps
                            </p>
                            <h1 className="m-0 p-0 text-center">{item.reps}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <Modal
            title="Instructions"
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            zIndex={99999}
            cancelButtonProps={{ style: { display: "none" } }}
          >
            {exercise && (
              <p>
                {exercise.instructions.map(
                  (instruction: string, index: number) => (
                    <React.Fragment key={index}>
                      {index + 1}. {instruction.trim()}
                      <br />
                    </React.Fragment>
                  )
                )}
              </p>
            )}
          </Modal>
        </Drawer>
      )}
    </Layout>
  );
};

export default ExerciseListPage;
