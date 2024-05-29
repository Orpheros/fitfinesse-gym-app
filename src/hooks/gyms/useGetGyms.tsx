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
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useGetUserInfo();

  useEffect(() => {
    console.log("userdata", userData);
    if (!userData.gym_id) return;

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
  }, [userData]);

  return { gyms, error, loading };
};
