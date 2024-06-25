// useAddExercises.js
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";

export const useAddExercises = () => {
  const addExercise = async ({ category, exercise }: any) => {
    try {
      const exercisesRef = collection(db, "exercise", category, "items");
      console.log("exercisesRef", exercise);
      await addDoc(exercisesRef, {
        ...exercise,
        create_date: serverTimestamp(),
      });
      console.log("Exercise successfully added:", exercise);
    } catch (error) {
      console.error("Error adding exercise: ", error);
    }
  };

  return { addExercise };
};
