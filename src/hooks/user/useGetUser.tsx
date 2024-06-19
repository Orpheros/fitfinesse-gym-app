import {
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
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
    // Check if user_gym_id already exists in the database
    const userGymIdQuery = query(
      collection(db, "users"),
      where("user_gym_id", ">", 0)
    );
    const userGymIdSnapshot = await getDocs(userGymIdQuery);

    let maxGymId = 0;
    userGymIdSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.user_gym_id > maxGymId) {
        maxGymId = data.user_gym_id;
      }
    });

    const newUserGymId = maxGymId + 1;

    const user = {
      name: userAuth.name,
      gym_id: 0,
      user_id: userAuth.user_id,
      user_gym_id: newUserGymId,
      max_progress: 0,
    };

    await setDoc(userDocRef, user);
    return user;
  } else {
    return userDoc.data();
  }
};
