import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { useGetUserInfo } from "../hooks/user/useGetUserInfo";
import LoadingPage from "../components/layout/loading";
import { useGetGyms } from "../hooks/gyms/useGetGyms";
import { exercises } from "../assets/exercises/index";
import { useParams } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
import React from "react";
import { capitalizeWords } from "../helper/formating-helper";

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

const ExerciseListPage = () => {
  const { userData } = useGetUserInfo();
  const { gyms, loading } = useGetGyms();
  const { category } = useParams();
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState<any>(null);
  const categoryExercises = (exercises as ExerciseCategory)[category || ""];

  const showDrawer = (category: any) => {
    console.log("cat", category);
    setExercise(category);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (!categoryExercises) {
    return (
      <Layout>
        <div style={{ marginBottom: "5rem" }}>
          <div>Category not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        {categoryExercises.map((a) => {
          return (
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
                      {a.equipment !== "body weight" && (
                        <p className="m-0" style={{ fontSize: "0.7rem" }}>
                          Equipment: {capitalizeWords(a.equipment)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {exercise && (
          <Drawer
            title={exercise.name}
            onClose={onClose}
            open={open}
            width="100vw"
            placement="left"
          >
            {exercise ? (
              <>
                <img
                  className="border"
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  style={{ width: "100%", borderRadius: "12px" }}
                />
                <p>{capitalizeWords(exercise.name)}</p>
                <p>{exercise.target}</p>
                <p>{exercise.equipment}</p>
                <p>{exercise.instructions}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Drawer>
        )}
      </div>
    </Layout>
  );
};

export default ExerciseListPage;
