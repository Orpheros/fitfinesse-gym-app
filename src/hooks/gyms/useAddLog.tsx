import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { useGetUser } from "../user/useGetUser";

export const useAddLog = () => {
  const gymsRef = collection(db, "log");
  const { user_id } = useGetUser();
  const addLog = async ({ gym_id, gym_name, loyalty_point }: any) => {
    console.log("gym_id", gym_id);
    // await addDoc(gymsRef, {
    //   user_id,
    //   gym_id,
    //   gym_name,
    //   loyalty_point,
    //   create_date: serverTimestamp(),
    // });
  };
  return { addLog };
};
