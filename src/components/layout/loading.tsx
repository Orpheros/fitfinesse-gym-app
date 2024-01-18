import { Spin } from "antd";

const LoadingPage = (props: any) => {
  const { loading } = props;
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div>
        <Spin spinning={loading}></Spin>
      </div>
    </div>
  );
};

export default LoadingPage;
