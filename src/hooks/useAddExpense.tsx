import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../components/config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddExpense = () => {
  const expenseRef = collection(db, "expense");
  const { user_id } = useGetUserInfo();
  const addExpense = async ({ description, amount, expense_type }: any) => {
    await addDoc(expenseRef, {
      user_id,
      description,
      amount,
      expense_type,
      create_date: serverTimestamp(),
    });
  };
  return { addExpense };
};
