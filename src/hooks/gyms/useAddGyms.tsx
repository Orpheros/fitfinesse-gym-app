import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { useGetUser } from "../user/useGetUser";

export const useAddGym = () => {
  const gymsRef = collection(db, "gyms");
  const { user_id } = useGetUser();
  const addGym = async ({ gym_id, gym_name, loyalty_point }: any) => {
    console.log("gym_id", gym_id);
    await addDoc(gymsRef, {
      user_id,
      gym_id,
      gym_name,
      loyalty_point,
      create_date: serverTimestamp(),
    });
  };
  return { addGym };
};
