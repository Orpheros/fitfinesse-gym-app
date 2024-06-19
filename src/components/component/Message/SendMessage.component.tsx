import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../config/firebase-config";
import { Button, Input, Space } from "antd";
import { useParams } from "react-router-dom";

const SendMessage = ({ scroll }: { scroll: any }) => {
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const sendMessage = async (event: any) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const user = auth.currentUser;
    if (user) {
      const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
        gym_id: Number(id),
      });
    }
    setMessage("");
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input"
          placeholder="type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Space.Compact>
    </form>
  );
};

export default SendMessage;
