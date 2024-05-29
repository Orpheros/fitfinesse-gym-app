import React, { useState } from "react";
import LoadingPage from "../components/layout/loading";
import { useGetExpense } from "../hooks/useGetExpense";
import Layout from "../components/layout/layout";
import ExerciseCardComponent from "../components/component/exercise-card.component";
import CurrentPlanComponent from "../components/component/dashboard-current-plan.component";
import { useNavigate } from "react-router-dom";

const ExercisePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Exercise");

  const handleClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const { loading } = useGetExpense();

  return (
    <>
      {!loading ? (
        <Layout>
          <div className="d-flex justify-content-between py-2">
            <div
              className="m-auto"
              style={{
                color: activeTab === "Exercise" ? "blue" : "grey",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Exercise")}
            >
              Exercise
            </div>
            <div
              className="m-auto"
              style={{
                color: activeTab === "Daily" ? "blue" : "grey",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Daily")}
            >
              Daily
            </div>
          </div>

          <div
            className="containter-fluid"
            style={{
              marginBottom: "5rem",
            }}
            // style={{
            //   maxHeight: "100vh",
            //   overflow: "auto",
            // }}
          >
            {/* Exercise Tab */}
            {activeTab === "Exercise" && (
              <div
                className="m-auto py-2"
                style={{
                  width: "90%",
                  borderTop: "1px solid #1FD292",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(calc(50% - 0.5rem), 1fr))",
                }}
              >
                {/* Card Exercise */}
                <ExerciseCardComponent
                  onClick={() => handleNavigate("/exercise/list/back")}
                  label="Chest"
                  backgroundPath="src/assets/img/image3.png"
                  i1
                />
                <ExerciseCardComponent
                  label="Leg"
                  backgroundPath="src/assets/img/image4.jpg"
                />
                <ExerciseCardComponent
                  label="Back"
                  backgroundPath="src/assets/img/image5.jpg"
                />
                <ExerciseCardComponent
                  label="Shoulder"
                  backgroundPath="src/assets/img/image6.jpg"
                />
                <ExerciseCardComponent
                  label="Arm"
                  backgroundPath="src/assets/img/image7.png"
                />
                <ExerciseCardComponent
                  label="Cardio"
                  backgroundPath="src/assets/img/image8.png"
                />
              </div>
            )}

            {/* Daily Tab */}
            {activeTab === "Daily" && (
              <div
                className="d-flex flex-wrap m-auto py-2 gap-1 justify-content-between"
                style={{ width: "90%", borderTop: "1px solid #1FD292" }}
              >
                {/* Card Exercise */}
                <div className="w-100 d-flex flex-wrap gap-3">
                  <CurrentPlanComponent
                    backgroundPath="src/assets/img/image1.png"
                    label="MONDAY"
                  />
                  <CurrentPlanComponent
                    backgroundPath="src/assets/img/image1.png"
                    label="TUESDAY"
                  />
                </div>
              </div>
            )}
          </div>
        </Layout>
      ) : (
        <LoadingPage loading={loading} />
      )}
    </>
  );
};

export default ExercisePage;
