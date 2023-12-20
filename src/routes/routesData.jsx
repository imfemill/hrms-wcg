import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import Team from "../pages/team/Team";
import Leaves from "../pages/leaves/Leaves";
import Calender from "../pages/calender/Calender";
import Projects from "../pages/projects/Projects";
import Documents from "../pages/documents/Documents";
import Reports from "../pages/reports/Reports";
import CompanyPolicy from "../pages/companyPolicy/CompanyPolicy";
import MyInvestments from "../pages/myInvestments/MyInvestments";

import PasswordResetForm from "../pages/passwordReset/PasswordReset";
import SignIn from "../pages/signIn/SignIn";

export const routesData = [
  // Authenticate require as per need
  {
    name: "home",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
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
