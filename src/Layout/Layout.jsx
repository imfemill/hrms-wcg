import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  BanknotesIcon,
  ComputerDesktopIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Team", href: "/team", icon: UsersIcon, current: false },
  {
    name: "Leaves",
    href: "/leaves",
    icon: CalendarDaysIcon,
    current: false,
    children: [
      {
        name: "My Leaves",
        href: "/leaves/myleave",
        icon: ChartPieIcon,
        current: false,
      },
      {
        name: "Create Leave",
        href: "/leaves/createleave",
        icon: ChartPieIcon,
        current: false,
      },
    ],
  },
  { name: "Calendar", href: "/calender", icon: CalendarIcon, current: false },
  {
    name: "My Investments",
    href: "/my-investments",
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "/reports", icon: ChartPieIcon, current: false },
  {
    name: "Company Policy",
    href: "/company-policy",
    icon: ComputerDesktopIcon,
    current: false,
  },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Header
          setSidebarOpen={setSidebarOpen}
          classNames={classNames}
          userNavigation={userNavigation}
          navigation={navigation}
        />
        <Sidebar
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          navigation={navigation}
          classNames={classNames}
        />
        <main className="lg:pl-28 bg-[#f9fdff]">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <Outlet />
          </div>
        </main>
      </div>

      {/* <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"> */}
      {/* Secondary column (hidden on smaller screens) */}
      {/* </aside> */}
    </>
  );
};

export default Layout;
