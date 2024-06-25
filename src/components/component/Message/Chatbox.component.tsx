import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import Message from "./Message.component";
import SendMessage from "./SendMessage.component";
import "./chat.css";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("gym_id", "==", Number(id)),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a: any, b: any) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main
        className="chat-box"
        style={{
          overflowY: "auto",
          flex: "1 1 auto",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div className="messages-wrapper">
          {messages?.map((message: any) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </main>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default ChatBox;
