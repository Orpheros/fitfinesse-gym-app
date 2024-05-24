import Footer from "./footer";
import Navbar from "./navbar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      {/* add h-100 for full scroll*/}
      <div
        className="d-flex flex-column overflow-auto"
        // style={{ height: "calc(100% + 100px)" }}
        // style={{ marginBottom: "5rem" }}
      >
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
