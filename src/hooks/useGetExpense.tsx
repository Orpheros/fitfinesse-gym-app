import {
  Unsubscribe,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetExpense = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalTransactions, setTotalTransactions] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  });
  const expenseRef = collection(db, "expense");
  const { user_id } = useGetUserInfo();

  const getTransactions = async () => {
    let unsubscribe: Unsubscribe;
    try {
      const queryTransaction = query(
        expenseRef,
        where("user_id", "==", user_id),
        orderBy("create_date", "desc")
      );
      unsubscribe = onSnapshot(queryTransaction, (snapshot) => {
        let docs: any[] = [];
        let total = 0,
          totalIncome = 0,
          totalExpense = 0;
        snapshot.forEach((el) => {
          const data = el.data();
          const id = el.id;
          docs.push({ ...data, id });
          if (data.expense_type == "income") {
            totalIncome += Number(data.amount);
          } else {
            totalExpense += Number(data.amount);
          }
        });
        total = totalIncome - totalExpense;
        setTransactions(docs as any);
        setTotalTransactions({
          balance: total,
          income: totalIncome,
          expense: totalExpense,
        });
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions, loading, totalTransactions };
};
