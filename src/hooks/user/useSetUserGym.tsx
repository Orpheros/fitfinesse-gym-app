import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import Swal from "sweetalert2";

export const handleSetGym = async (userId: string, selectedGym: any) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("User does not exist");
  }

  Swal.fire({
    icon: "warning",
    text: "Changing gym will reset your progress",
    showDenyButton: true,
  }).then(async (res) => {
    if (res.isConfirmed) {
      await updateDoc(userRef, {
        gym_id: selectedGym,
      });
    } else if (res.isDenied) {
      return;
    }
  });
};
