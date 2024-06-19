import {
  query,
  collection,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../components/config/firebase-config";
import { useState, useRef, useEffect } from "react";

export const useGetMessages = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages as any);
    });
    return () => unsubscribe();
  });
  return { messages, scroll };
};
