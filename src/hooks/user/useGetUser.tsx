import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";

export const useGetUser = () => {
  const { user_id, name, photo, isAuth, last_login } =
    JSON.parse(localStorage.getItem("auth") as any) || {};
  return { user_id, name, photo, isAuth, last_login };
};

export const useCheckUser = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.user_id);

  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    const user = {
      name: userAuth.name,
      gym_id: 0,
      user_id: userAuth.user_id,
    };
    setDoc(userDocRef, user);
    return user;
  } else {
    return userDoc.data();
  }
};
