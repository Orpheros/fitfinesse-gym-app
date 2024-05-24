import { Badge } from "antd";
import { IoNotifications } from "react-icons/io5";
const Navbar = () => {
  // const navigate = useNavigate();
  // const { photo } = useGetUserInfo();
  const show = true;
  // const handleLogout = () => {
  //   auth.signOut();
  //   localStorage.removeItem("auth");
  //   navigate("/");
  // };
  const blue = "#1E56A0";
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-light"
        style={{
          background: blue,
          height: "100px",
          borderRadius: "0px 0px 24px 24px",
        }}
      >
        <div
          className="container-fluid"
          style={{
            paddingLeft: "1.1rem",
            paddingRight: "1.1rem",
          }}
        >
          <div>
            <a
              className="nav-link text-white"
              href="#"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "0.6px",
              }}
            >
              FitFinesse
            </a>
          </div>
          <span>
            <Badge count={show ? 5 : 0}>
              <IoNotifications size={"22px"} color="white" />
            </Badge>
          </span>
          {/* <div className="d-flex align-items-center">
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
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
