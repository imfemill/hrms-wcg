/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const SignIn = lazy(() => import("../pages/signIn/SignIn"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Register = lazy(() => import("../pages/register/Register"));

export const routesData = [
  // Authenticate require as per need
  {
    name: "home",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "login",
    path: "/login",
    element: <SignIn />,
  },
  {
    name: "register",
    path: "/register",
    element: <Register />,
  },
  //   ... as per need
];
