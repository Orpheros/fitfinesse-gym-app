import { Link, useLocation } from "react-router-dom";
// import { useGetUserInfo } from "../../hooks/useGetUserInfo";
// import { auth } from "../config/firebase-config";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IoBarbellOutline } from "react-icons/io5";
import { PiQrCode } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
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

  const gray = "#BFC8D3";
  const lightBlue = "#E2EEFF";
  const blue = "#2E5FD4";

  const dashboardPage = "/dashboard";
  const exercisePage = "/exercise";
  const exerciseListPage = "/exercise/list";
  const loyaltyPage = "/loyalty";

  useEffect(() => {
    const currentPath = location.pathname;
    setIsActive(currentPath);
  }, []);

  return (
    <>
      {/* footer 70px height */}
      {/* navbar-expand-sm */}
      <footer
        className="navbar fixed-bottom navbar-expand-sm navbar-dark mt-auto"
        style={{
          padding: "8px",
          paddingBottom: "14px",
          borderRadius: "16px 16px 0px 0px",
          boxShadow: "0px -4px 8px 0px rgba(160, 160, 160, 0.10)",
          background: "white",
        }}
      >
        <div className="container-fluid d-flex justify-content-between px-2 text-#BFC8D3">
          <div
            className="d-flex align-items-center align-items-stretch gap-3 rounded"
            style={{ background: isActive === dashboardPage ? lightBlue : "" }}
          >
            <Link
              to={dashboardPage}
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "10px",
              }}
            >
              <BiHomeAlt
                style={{
                  fontSize: "1.7rem",
                  color: isActive === dashboardPage ? blue : gray,
                }}
              />
            </Link>
            {/* <label
              style={{
                color: isActive === "/dashboard" ? blue : gray,
              }}
            >
              Home
            </label> */}
          </div>
          <div
            className="d-flex align-items-center align-items-stretch gap-3 rounded"
            style={{
              background:
                isActive === exercisePage || isActive == exerciseListPage
                  ? lightBlue
                  : "",
            }}
          >
            <Link
              to={exercisePage}
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "10px",
              }}
            >
              <IoBarbellOutline
                style={{
                  fontSize: "1.7rem",
                  color:
                    isActive === exercisePage || isActive == exerciseListPage
                      ? blue
                      : gray,
                }}
              />
            </Link>
          </div>
          <div
            className="d-flex align-items-center align-items-stretch gap-3 rounded"
            style={{
              background: isActive == loyaltyPage ? lightBlue : "",
            }}
          >
            <Link
              to={loyaltyPage}
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "10px",
              }}
            >
              <PiQrCode
                style={{
                  fontSize: "1.7rem",
                  color: isActive === loyaltyPage ? blue : gray,
                }}
              />
            </Link>
          </div>
          <div
            className="d-flex align-items-center align-items-stretch gap-3 rounded"
            style={{
              background: isActive === "/expense-tracker-add" ? lightBlue : "",
            }}
          >
            <Link
              to="/expense-tracker-add"
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "10px",
              }}
            >
              <TbReportAnalytics
                style={{
                  fontSize: "1.7rem",
                  color: isActive === "/expense-tracker-add" ? blue : gray,
                }}
              />
            </Link>
          </div>
          <div
            className="d-flex align-items-center align-items-stretch gap-3 rounded"
            style={{ background: isActive === "/account" ? lightBlue : "" }}
          >
            <Link
              to="/account"
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "10px",
              }}
            >
              <UserOutlined
                style={{
                  fontSize: "1.7rem",
                  color: isActive === "/account" ? blue : gray,
                }}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
