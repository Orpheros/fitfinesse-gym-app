import { useEffect, useState } from "react";
import { db } from "../components/config/firebase-config";
import {
  collection,
  query,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";

export const useGetUserInfo = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const usersList = snapshot.docs.map((doc) => doc.data());
        setUserData(usersList as any);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { userData, loading, error };
};
