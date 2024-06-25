import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../../components/config/firebase-config";
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../user/useGetUserInfo";
import { compareDates } from "../../helper/formating-helper";

// interface Gym {
//   id: string;
//   gym_id: string;
//   gym_name: string;
//   loyalty_point: number;
//   user_id: string;
//   exercises: Exercise[];
// }

// interface Exercise {
//   exercise_id: string;
//   name: string;
//   time: {
//     hours: number;
//     minutes: number;
//     seconds: number;
//   };
// }

export const useGetGymExercises = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useGetUserInfo();
  const [userGyms, setUserGyms] = useState<any>([]);
  const [userGymsList, setUserGymsList] = useState<any>([]);
  const [userGymsByDate, setUserGymsByDate] = useState<any>([]);
  const [userGymsListByGym, setUserGymsListByGym] = useState<any>([]);

  useEffect(() => {
    const fetchUserGyms = () => {
      try {
        if (!userData.user_id) return;

        const userGymsRef = collection(db, "user_gyms");
        // console.log("asdasdsa", userData.user_gym_id);
        const userGymsQuery = query(
          userGymsRef,
          //   where("user_id", "==", userData.user_id)
          where("gym_id", "==", userData.gym_id),
          where("user_gym_id", "==", userData.user_gym_id)
        );

        onSnapshot(userGymsQuery, (snapshot) => {
          let docs: any[] = [];
          snapshot.forEach((el) => {
            const data = el.data();
            const id = el.id;
            docs.push({ ...data, id });
          });
          setUserGyms(docs);
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gyms and exercises:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchUserGyms();
  }, [userData]);

  useEffect(() => {
    const fetchGymsExercises = () => {
      try {
        if (!userData.user_id) return;

        const userGymsRef = collection(db, "user_gyms");
        // console.log("asdasdsa", userData.user_gym_id);
        const userGymsQuery = query(
          userGymsRef,
          //   where("user_id", "==", userData.user_id)
          //   where("gym_id", "==", userData.gym_id),
          where("user_gym_id", "==", userData.user_gym_id)
        );

        onSnapshot(userGymsQuery, (snapshot) => {
          let docs: any[] = [];
          snapshot.forEach((el) => {
            const data = el.data();
            const id = el.id;
            docs.push({ ...data, id });
          });
          setUserGymsList(docs);
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gyms and exercises:", err);
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchGymsExercises();
  }, [userData]);

  useEffect(() => {
    const fetchGymsExercises = () => {
      try {
        if (!userData.user_id) return;

        const userGymsRef = collection(db, "user_gyms");
        const userGymsQuery = query(
          userGymsRef,
          where("gym_id", "==", userData.gym_id),
          where("user_gym_id", "==", userData.user_gym_id),
          orderBy("timestamp", "desc")
        );

        onSnapshot(userGymsQuery, (snapshot) => {
          let docs: any[] = [];
          snapshot.forEach((el) => {
            const data = el.data();
            const id = el.id;
            docs.push({ ...data, id });
          });
          setUserGymsListByGym(docs);
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gyms and exercises:", err);
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchGymsExercises();
  }, [userData]);

  useEffect(() => {
    const fetchUserGymsByDate = () => {
      try {
        // const dateString = "31-05-2024";
        // const dateString = "03-06-2024";
        // const [day, month, year] = dateString.split("-").map(Number);
        // const currDate = new Date(year, month - 1, day);

        const currDate = new Date();
        if (!userData.user_id) return;

        const userGymsRef = collection(db, "user_gyms");
        // console.log("asdasdsa", userData.user_gym_id);
        const userGymsQuery = query(
          userGymsRef,
          //   where("user_id", "==", userData.user_id)
          where("gym_id", "==", userData.gym_id),
          where("user_gym_id", "==", userData.user_gym_id)
        );

        // onSnapshot(userGymsQuery, (snapshot) => {
        //   let docs: any[] = [];
        //   snapshot.forEach((el) => {
        //     console.log("el", el.data());
        //     const data = el.data();
        //     const id = el.id;
        //     docs.push({ ...data, id });

        //     // if (el.data().timestamp == null) return;
        //     // if (compareDates(currDate, el.data().timestamp.toDate())) {
        //     //   console.log("date same", el.data());
        //     //   const data = el.data();
        //     //   const id = el.id;
        //     //   docs.push({ ...data, id });
        //     // }
        //   });
        //   console.log("docs", docs);
        //   if (docs[0].timestamp == null) return;
        //   if (compareDates(currDate, docs[0].timestamp.toDate())) {
        //     console.log("datasame", docs);
        //     setUserGymsByDate(docs);
        //   }
        //   //   setUserGyms(docs);
        // });

        onSnapshot(userGymsQuery, (snapshot) => {
          let docs: any[] = [];
          snapshot.forEach((el) => {
            const data = el.data();
            const id = el.id;
            docs.push({ ...data, id });
          });

          const currentDateData = docs.filter((doc) => {
            if (doc.timestamp) {
              const docDate = doc.timestamp.toDate();
              return compareDates(currDate, docDate);
            }
            return false;
          });
          setUserGymsByDate(currentDateData);
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gyms and exercises:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchUserGymsByDate();
  }, [userData]);

  return {
    error,
    loading,
    userGyms,
    userGymsList,
    userGymsByDate,
    userGymsListByGym,
  };
};
