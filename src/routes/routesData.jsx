/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const SignIn = lazy(() => import("../pages/signIn/SignIn"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const PasswordResetForm = lazy(
  () => import("../pages/passwordReset/PasswordReset"),
);

export const routesData = [
  // Authenticate require as per need
  {
    name: "home",
    path: "/",
    element: <Dashboard />,
  },
  //   ... as per need
];

export const openRoute = [
  {
    name: "signIn",
    path: "/signin",
    element: <SignIn />,
  },
  {
    name: "passwordReset",
    path: "/password/reset",
    element: <PasswordResetForm />,
  },
  //   ... as per need
];
