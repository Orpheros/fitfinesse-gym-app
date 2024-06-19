import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";

export const handleSetWeight = async (userId: string, data: any) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("User does not exist");
  }

  await updateDoc(userRef, {
    weight: JSON.stringify(data),
  });
};
