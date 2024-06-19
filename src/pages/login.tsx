import { Button } from "antd";
import { auth, db, provider } from "../components/config/firebase-config";
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";
import { LoginBackground } from "../assets/background";
import { useCheckUser, useGetUser } from "../hooks/user/useGetUser";
import styled from "styled-components";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const mobile = window.matchMedia("(min-width: 576px)").matches;
  const isLogined = localStorage.getItem("auth");

  useEffect(() => {
    console.log("a", isLogined);
    getRedirectResult(auth).then(async (result) => {
      if (result && result.user) {
        const userAuth = {
          user_id: result.user.uid,
          name: result.user.displayName,
          photo: result.user.photoURL,
          last_login: new Date().toISOString(),
          isAuth: true,
        };
        // localStorage.setItem("auth", JSON.stringify(userAuth));

        // Call the function to save user data
        // saveUserDataToFirestore(userAuth);
        const res = await useCheckUser(userAuth);
        localStorage.setItem("auth", JSON.stringify(res));
        navigate("/dashboard");
      }
    });
  }, []);

  const signInGoogle = async () => {
    if (mobile) {
      try {
        const result = await signInWithPopup(auth, provider);
        const userAuth = {
          user_id: result.user.uid,
          name: result.user.displayName,
          photo: result.user.photoURL,
          last_login: new Date().toISOString(),
          isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(userAuth));
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    } else {
      try {
        provider.setCustomParameters({
          prompt: "select_account",
        });
        await signInWithRedirect(auth, provider);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    }
  };
  const LoginCard = styled.div`
    backdrop-filter: blur(7px) saturate(180%);
    -webkit-backdrop-filter: blur(7px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    padding: 2rem;
  `;

  if (isLogined) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <LoginBackground />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <LoginCard>
            <p className="">Sign in with google to continue</p>
            <Button
              size="large"
              onClick={signInGoogle}
              icon={<GoogleOutlined />}
            >
              Sign in with Google
            </Button>
          </LoginCard>
        </div>
      </div>
    </>
  );
};

export default Login;
