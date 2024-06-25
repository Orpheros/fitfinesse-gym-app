import ChatBox from "../components/component/Message/Chatbox.component";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="p-3">
        <IoMdArrowBack size={30} onClick={() => navigate(-1)} />
        <label>Open Chat</label>
      </nav>
      <div
        className="d-flex justify-content-center"
        style={{
          height: "90%",
        }}
      >
        <div className="d-flex flex-column" style={{ width: "90%" }}>
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
