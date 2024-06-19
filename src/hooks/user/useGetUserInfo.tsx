import { useEffect, useState } from "react";
import { db } from "../../components/config/firebase-config";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useGetUser } from "./useGetUser";
import { useNavigate } from "react-router-dom";
import { User } from "../../components/interface/user.interface";

export const useGetUserInfo = () => {
  const [userData, setUserData] = useState<User>({} as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user_id } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id) {
      navigate("/");
    }
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("user_id", "==", user_id));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // const usersList = snapshot.docs.map((doc) => doc.data());
        // console.log("usersList", usersList[0]);
        // setUserData(usersList[0]);
        const userDoc = snapshot.docs[0];
        setUserData({ ...userDoc.data() } as User);
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
