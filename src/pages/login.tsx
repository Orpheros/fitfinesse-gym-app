import { Button } from "antd";
import { auth, provider } from "../components/config/firebase-config";
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";
import { LoginBackground } from "../assets/background";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import styled from "styled-components";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result && result.user) {
        const userAuth = {
          user_id: result.user.uid,
          name: result.user.displayName,
          photo: result.user.photoURL,
          isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(userAuth));
        navigate("/expense-tracker");
      }
    });
  }, []);

  const signInGoogle = async () => {
    if (window.matchMedia("(min-width: 576px)").matches) {
      try {
        const result = await signInWithPopup(auth, provider);
        const userAuth = {
          user_id: result.user.uid,
          name: result.user.displayName,
          photo: result.user.photoURL,
          isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(userAuth));
        navigate("/expense-tracker");
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

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
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
