import Layout from "./layout";
import { Empty } from "antd";

const ErrorPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Empty description={<span>Not Found</span>} />
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
