import Navbar from "./navbar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <div>
        <Navbar />
        <div
          className="pt-4"
          style={{ background: "#F5F7F8", minHeight: "calc(100vh - 50px)" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
