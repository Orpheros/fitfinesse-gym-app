import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/login.tsx";
import ExpenseTracker from "./pages/expense-tracker.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseCreate from "./pages/expense-create.tsx";
import Account from "./pages/account.tsx";
import ExpenseList from "./pages/expense-list.tsx";

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
    path: "/expense-tracker",
    element: <ExpenseTracker />,
  },
  {
    path: "/expense-tracker-add",
    element: <ExpenseCreate />,
  },
  {
    path: "/expense-tracker-list",
    element: <ExpenseList />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

function startApp() {
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
