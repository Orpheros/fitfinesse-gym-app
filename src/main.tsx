import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./pages/account.tsx";
import DashboardPage from "./pages/dashboard.tsx";
import RegisterPage from "./pages/register.tsx";
import ExercisePage from "./pages/exercise.tsx";
import LoyaltyPage from "./pages/loyalty.tsx";
import ExerciseListPage from "./pages/exercise-list.tsx";
import ErrorPage from "./components/layout/error.tsx";
import CommunityPage from "./pages/community.tsx";
import ChatPage from "./pages/chat.tsx";

declare global {
  interface Window {
    cordova: any;
  }
}

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/exercise",
    children: [
      {
        path: "",
        element: <ExercisePage />,
      },
      {
        path: "list/:category",
        element: <ExerciseListPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/loyalty",
    element: <LoyaltyPage />,
  },
  {
    path: "/community",
    children: [
      { path: "", element: <CommunityPage /> },
      { path: ":id", element: <ChatPage /> },
    ],
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function startApp() {
  const auth = localStorage.getItem("auth");
  if (!auth) {
    router.navigate("/");
  }
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="expense-tracker" element={<ExpenseTracker />} />
          <Route path="expense-tracker-add" element={<ExpenseCreate />} />
        </Routes>
      </HashRouter> */}
    </React.StrictMode>
  );
}

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}

// library
// "react-qr-scanner": "^0.0.11",
// npm i @yudiel/react-qr-scanner@1.2.10
