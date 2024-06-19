import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../user/useGetUserInfo";

interface Gym {
  id: string;
  gym_id: string;
  gym_name: string;
  loyalty_point: number;
  user_id: string;
}

export const useGetGyms = () => {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [gymsList, setGymsList] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useGetUserInfo();

  useEffect(() => {
    if (!userData.gym_id) return;
    // const gymId = 1;

    // const gymExercisesRef = collection(db, "gyms");
    // const q = query(gymExercisesRef);

    // onSnapshot(q, (snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log("aa", doc.data());
    //   });
    //   // console.log("aaaa", snapshot);
    //   setLoading(false);
    // });

    const gymsRef = collection(db, "gyms");
    const q = query(gymsRef, where("gym_id", "==", userData.gym_id));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let docs: any[] = [];
        snapshot.forEach((el) => {
          const data = el.data();
          const id = el.id;
          docs.push({ ...data, id });
        });
        setGyms(docs as any);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userData, gyms]);

  useEffect(() => {
    if (!userData.gym_id) return;
    // const gymId = 1;

    // const gymExercisesRef = collection(db, "gyms");
    // const q = query(gymExercisesRef);

    // onSnapshot(q, (snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log("aa", doc.data());
    //   });
    //   // console.log("aaaa", snapshot);
    //   setLoading(false);
    // });

    const gymsRef = collection(db, "gyms");
    const q = query(gymsRef);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let docs: any[] = [];
        snapshot.forEach((el) => {
          const data = el.data();
          const id = el.id;
          docs.push({ ...data, id });
        });
        setGymsList(docs as any);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userData, gyms]);

  return { gyms, error, loading, gymsList };
};
