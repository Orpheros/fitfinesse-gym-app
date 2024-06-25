import React, { useEffect, useState } from "react";
import LoadingPage from "../components/layout/loading";
import { useGetExpense } from "../hooks/useGetExpense";
import Layout from "../components/layout/layout";
import ExerciseCardComponent from "../components/component/exercise-card.component";
import CurrentPlanComponent from "../components/component/dashboard-current-plan.component";
import { useNavigate } from "react-router-dom";
import { primary_blue } from "../components/interface/user.interface";

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

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-between py-2">
          <div
            className="m-auto"
            style={{
              color: activeTab === "Exercise" ? primary_blue : "grey",
              cursor: "pointer",
            }}
            onClick={() => handleClick("Exercise")}
          >
            Exercise
          </div>
          <div
            className="m-auto"
            style={{
              color: activeTab === "Daily" ? primary_blue : "grey",
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
                onClick={() => handleNavigate("/exercise/list/chest")}
                label="Chest"
                backgroundPath="src/assets/img/image3.png"
                // i1
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/leg")}
                label="Leg"
                backgroundPath="src/assets/img/image4.jpg"
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/back")}
                label="Back"
                backgroundPath="src/assets/img/image5.jpg"
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/shoulder")}
                label="Shoulder"
                backgroundPath="src/assets/img/image6.jpg"
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/upper_arm")}
                label="Arm"
                backgroundPath="src/assets/img/image7.png"
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/cardio")}
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
                  onClick={() => handleNavigate("/exercise/list/daily_monday")}
                  backgroundPath="src/assets/img/image1.png"
                  label="MONDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_tuesday")}
                  backgroundPath="src/assets/img/image1.png"
                  label="TUESDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_wednesday")
                  }
                  backgroundPath="src/assets/img/image1.png"
                  label="WEDNESDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_thursday")
                  }
                  backgroundPath="src/assets/img/image1.png"
                  label="THURSDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_friday")}
                  backgroundPath="src/assets/img/image1.png"
                  label="FRIDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_saturday")
                  }
                  backgroundPath="src/assets/img/image1.png"
                  label="SATURDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_sunday")}
                  backgroundPath="src/assets/img/image1.png"
                  label="SUNDAY"
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ExercisePage;
