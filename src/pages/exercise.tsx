import React, { useState } from "react";
import LoadingPage from "../components/layout/loading";
import { useGetExpense } from "../hooks/useGetExpense";
import Layout from "../components/layout/layout";
import ExerciseCardComponent from "../components/component/exercise-card.component";
import CurrentPlanComponent from "../components/component/dashboard-current-plan.component";
import { useNavigate } from "react-router-dom";
import { primary_blue } from "../components/interface/user.interface";
import image1 from "../assets/img/image1.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";
import image7 from "../assets/img/image7.png";
import image8 from "../assets/img/image8.png";

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

  if (loading) {
    return <LoadingPage />;
  }

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
                backgroundPath={image3}
                // i1
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/leg")}
                label="Leg"
                backgroundPath={image4}
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/back")}
                label="Back"
                backgroundPath={image5}
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/shoulder")}
                label="Shoulder"
                backgroundPath={image6}
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/upper_arm")}
                label="Arm"
                backgroundPath={image7}
              />
              <ExerciseCardComponent
                onClick={() => handleNavigate("/exercise/list/cardio")}
                label="Cardio"
                backgroundPath={image8}
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
                  backgroundPath={image1}
                  label="MONDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_tuesday")}
                  backgroundPath={image1}
                  label="TUESDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_wednesday")
                  }
                  backgroundPath={image1}
                  label="WEDNESDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_thursday")
                  }
                  backgroundPath={image1}
                  label="THURSDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_friday")}
                  backgroundPath={image1}
                  label="FRIDAY"
                />
                <CurrentPlanComponent
                  onClick={() =>
                    handleNavigate("/exercise/list/daily_saturday")
                  }
                  backgroundPath={image1}
                  label="SATURDAY"
                />
                <CurrentPlanComponent
                  onClick={() => handleNavigate("/exercise/list/daily_sunday")}
                  backgroundPath={image1}
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
