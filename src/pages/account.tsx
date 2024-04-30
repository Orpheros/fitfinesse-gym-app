import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Button } from "antd";

const Account = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <Layout>
      <div>Account</div>
      <Button className="ms-lg-4 ms-3 me-lg-3 me-2" onClick={handleLogout}>
        Logout
      </Button>
    </Layout>
  );
};

export default Account;
