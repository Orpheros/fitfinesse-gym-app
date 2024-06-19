import { doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { createQuery } from "../../helper/createQuery.helper";
import Swal from "sweetalert2";

export const handleScan = async (
  userId: string,
  qrData: any,
  userGym: string
) => {
  const qrCodeGym = JSON.parse(qrData).gym_name;
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  if (qrCodeGym != userGym) {
    return { message: "QR code invalid", isError: true };
  }

  if (!userDoc.exists()) {
    throw new Error("User does not exist");
  }

  const userData = userDoc.data();
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  if (userData.last_scan === currentDate) {
    Swal.fire({
      icon: "warning",
      text: "Already scanned for this day",
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((res) => {
      if (res.isConfirmed) {
        window.location.reload();
      }
    });
    return { message: "Already scanned for this day", isScanned: true };
  } else {
    await updateDoc(userRef, {
      last_scan: currentDate,
      loyalty_points: (userData.loyalty_points || 0) + 1,
    });

    return {
      message: "Loyalty point added",
      loyalty_points: (userData.loyalty_points || 0) + 1,
    };
  }
};
