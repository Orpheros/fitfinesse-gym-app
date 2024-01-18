import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
const Navbar = () => {
  const navigate = useNavigate();
  const { photo } = useGetUserInfo();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-light"
        style={{ background: "#495E57", height: "50px" }}
      >
        <div className="container-fluid">
          <div>
            <a className="nav-link text-white" href="#">
              Dashboard
            </a>
          </div>

          <div className="d-flex align-items-center">
            <div>
              <a className=" d-flex align-items-center" href="#">
                <img
                  src={photo}
                  className="rounded-circle"
                  height="30"
                  loading="lazy"
                />
                <Button
                  className="ms-lg-4 ms-3 me-lg-3 me-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
