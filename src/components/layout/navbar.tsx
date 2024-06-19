const Navbar = () => {
  // const show = true;
  const blue = "#1E56A0";
  // if (!loading) {
  //   return <LoadingPage></LoadingPage>;
  // }
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
          {/* <span>
            <Badge count={show ? 5 : 0}>
              <IoNotifications size={"22px"} color="white" />
            </Badge>
          </span> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
