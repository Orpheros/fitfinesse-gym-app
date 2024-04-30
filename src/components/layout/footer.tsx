import { Link, useLocation } from "react-router-dom";
// import { useGetUserInfo } from "../../hooks/useGetUserInfo";
// import { auth } from "../config/firebase-config";
import {
  HomeOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
const Footer = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState("");
  //   const navigate = useNavigate();
  //   const { photo } = useGetUserInfo();
  //   const handleLogout = () => {
  //     auth.signOut();
  //     localStorage.removeItem("auth");
  //     navigate("/");
  //   };

  useEffect(() => {
    const currentPath = location.pathname;
    setIsActive(currentPath);
  }, []);

  return (
    <>
      <footer
        className="navbar fixed-bottom navbar-expand-sm navbar-dark mt-auto py-0"
        style={{ background: "#495E57", height: "70px" }}
      >
        <div className="container-fluid d-flex justify-content-between px-4 pt-2 text-white">
          <div className="d-flex flex-column">
            <Link
              to="/expense-tracker"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <HomeOutlined
                style={{
                  fontSize: "1.7rem",
                  color: isActive === "/expense-tracker" ? "#F4CE14" : "white",
                }}
              />
            </Link>
            <label
              style={{
                color: isActive === "/expense-tracker" ? "#F4CE14" : "white",
              }}
            >
              Home
            </label>
          </div>
          <div className="d-flex flex-column">
            <Link
              to="/expense-tracker-add"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <PlusCircleOutlined
                style={{
                  fontSize: "1.7rem",
                  color:
                    isActive === "/expense-tracker-add" ? "#F4CE14" : "white",
                }}
              />
            </Link>
            <label
              style={{
                color:
                  isActive === "/expense-tracker-add" ? "#F4CE14" : "white",
              }}
            >
              New
            </label>
          </div>
          <div className="d-flex flex-column">
            <Link
              to="/expense-tracker-list"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <UnorderedListOutlined
                style={{
                  fontSize: "1.7rem",
                  color:
                    isActive === "/expense-tracker-list" ? "#F4CE14" : "white",
                }}
              />
            </Link>
            <label
              style={{
                color:
                  isActive === "/expense-tracker-list" ? "#F4CE14" : "white",
              }}
            >
              List
            </label>
          </div>
          <div className="d-flex flex-column">
            <Link
              to="/account"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <UserOutlined
                style={{
                  fontSize: "1.7rem",
                  color: isActive === "/account" ? "#F4CE14" : "white",
                }}
              />
            </Link>
            <label
              style={{
                color: isActive === "/account" ? "#F4CE14" : "white",
              }}
            >
              Account
            </label>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
