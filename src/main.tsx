import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.tsx";
import ExpenseTracker from "./pages/expense-tracker.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseCreate from "./pages/expense-create.tsx";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
