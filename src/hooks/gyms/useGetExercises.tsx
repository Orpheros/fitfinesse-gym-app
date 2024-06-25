import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";

export const fetchExercises = (setExercises: (exercises: any[]) => void) => {
  const exercisesRef = collection(db, "exercises");

  const unsubscribe = onSnapshot(
    exercisesRef,
    (snapshot) => {
      let docs: any[] = [];
      snapshot.forEach((el) => {
        const data = el.data();
        const id = el.id;
        docs.push({ ...data, id });
      });
      setExercises(docs);
    },
    (error) => {}
  );

  return () => unsubscribe();
};
