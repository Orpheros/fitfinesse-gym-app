import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { useGetUserInfo } from "../user/useGetUserInfo";
import { compareDates } from "../../helper/formating-helper";

export const useAddGymExercises = () => {
  const userGymsRef = collection(db, "user_gyms");
  const { userData } = useGetUserInfo();

  const addOrUpdateExercises = async (a: any) => {
    const currDate = new Date();
    let foundMatchingDoc = false;

    const res = {
      gym_id: userData.gym_id,
      user_gym_id: userData.user_gym_id,
      user_id: userData.user_id,
      user_exercise: JSON.stringify(a),
      timestamp: serverTimestamp(),
    };

    const q = query(
      userGymsRef,
      where("user_id", "==", userData.user_id),
      where("gym_id", "==", userData.gym_id)
    );

    const querySnapshot = await getDocs(q);

    for (const el of querySnapshot.docs) {
      const docData = el.data();
      const docTimestamp = docData.timestamp.toDate();
      console.log("aaa", docTimestamp, currDate);
      if (compareDates(docTimestamp, currDate)) {
        // Dates are the same, update the existing document
        console.log("date found");
        const docId = el.id;
        const docRef = doc(db, "user_gyms", docId);
        await updateDoc(docRef, res);
        foundMatchingDoc = true; // Set flag indicating a matching document is found
        break; // Exit the loop after the update is executed
      }
    }
    // If no matching documents found, add a new document
    if (!foundMatchingDoc) {
      console.log("not found");
      await addDoc(userGymsRef, res);
    }

    // If no matching documents found, add a new document
    // if (querySnapshot.empty && !updateExecuted) {
    //   console.log("not found");
    //   // await addDoc(userGymsRef, res);
    // }

    // if (!querySnapshot.empty && updateExecuted) {
    //   await addDoc(userGymsRef, res);
    // }
    // if (!foundMatchingDoc && !updateExecuted) {
    //   console.log("aaa");
    //   // await addDoc(userGymsRef, res);
    // }
  };

  return { addOrUpdateExercises };
};
