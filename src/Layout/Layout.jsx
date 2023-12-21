import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="bg-[#f9fdff] min-h-screen">
        <Header setSidebarOpen={setSidebarOpen} />
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main className="lg:pl-28 bg-[#f9fdff]">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
