/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const SignIn = lazy(() => import("../pages/signIn/SignIn"));
const PasswordResetForm = lazy(() => import("../pages/passwordReset/PasswordReset"));

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Team = lazy(() => import("../pages/team/Team"));
const Leaves = lazy(() => import("../pages/leaves/Leaves"));
const Calender = lazy(() => import("../pages/calender/Calender"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Documents = lazy(() => import("../pages/documents/Documents"));
const Reports = lazy(() => import("../pages/reports/Reports"));
const MyInvestments = lazy(() => import("../pages/myInvestments/MyInvestments"));
const CompanyPolicy = lazy(() => import("../pages/companyPolicy/CompanyPolicy"));

export const routesData = [
  // Authenticate require as per need
  {
    name: "home",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "team",
    path: "/team",
    element: <Team />,
  },
  {
    name: "leaves",
    path: "/leaves",
    element: <Leaves />,
  },
  {
    name: "calender",
    path: "/calender",
    element: <Calender />,
  },
  {
    name: "projects",
    path: "/projects",
    element: <Projects />,
  },
  {
    name: "documents",
    path: "/documents",
    element: <Documents />,
  },
  {
    name: "reports",
    path: "/reports",
    element: <Reports />,
  },
  {
    name: "my-investments",
    path: "/my-investments",
    element: <MyInvestments />,
  },
  {
    name: "company-policy",
    path: "/company-policy",
    element: <CompanyPolicy />,
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
