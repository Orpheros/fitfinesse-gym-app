import { useEffect } from "react";
import Layout from "../components/layout/layout";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import LoadingPage from "../components/layout/loading";

const ExerciseListPage = () => {
  const { userData, loading } = useGetUserInfo();
  useEffect(() => {
    console.log("asdasd", userData);
  }, [userData, loading]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <Layout>
      {userData.map((user: any, index) => (
        <div key={index}>
          <p>Name: {user.username}</p>
          <p>Photo: {user.user_id}</p>
        </div>
      ))}
    </Layout>
  );
};

export default ExerciseListPage;
