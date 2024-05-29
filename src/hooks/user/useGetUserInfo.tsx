import { useEffect, useState } from "react";
import { db } from "../../components/config/firebase-config";
import {
  collection,
  query,
  DocumentData,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useGetUser } from "./useGetUser";

export const useGetUserInfo = () => {
  const [userData, setUserData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user_id } = useGetUser();

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("user_id", "==", user_id));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // const usersList = snapshot.docs.map((doc) => doc.data());
        // console.log("usersList", usersList[0]);
        // setUserData(usersList[0]);
        const userDoc = snapshot.docs[0];
        setUserData({ ...userDoc.data() });
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
