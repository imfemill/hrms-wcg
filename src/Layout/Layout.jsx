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
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Team", href: "/team", icon: UsersIcon, current: false },
  { name: "Leaves", href: "/leaves", icon: CalendarDaysIcon, current: false },
  { name: "Calendar", href: "/calender", icon: CalendarIcon, current: false },
  { name: "Projects", href: "/projects", icon: FolderIcon, current: false },
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
  { name: "Profile", href: "/profile", icon: UserCircleIcon },
  { name: "Sign out", href: "/signin", icon: ArrowRightOnRectangleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-[#f9fdff] min-h-screen">
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
        <main className="lg:pl-14 xl:pl-[14%]">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <div>
              <Outlet />
            </div>
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
