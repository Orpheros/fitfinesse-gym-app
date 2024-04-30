import Footer from "./footer";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="pt-3 h-100 d-flex flex-column "
        style={{ background: "#F5F7F8" }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
