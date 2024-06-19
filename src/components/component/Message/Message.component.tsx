import React from "react";
import { auth } from "../../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }: { message: any }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={`chat-bubble ${message.uid === user?.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p
          className={`user-name m-0 ${
            message.uid === user?.uid ? "text-white" : " text-dark"
          }`}
        >
          {message.name}
        </p>
        <p className="user-message m-0">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
