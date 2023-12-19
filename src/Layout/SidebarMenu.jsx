import { ChartPieIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SidebarMenu({ navigation, classNames }) {
  const [open, setopen] = useState(null); // dropdown open/close
  const nav = useNavigate();
  const { pathname } = useLocation();

  const groupNavigation = [
    {
      name: "Dropdown 1",
      href: "/",
      icon: ChartPieIcon,
      current: false,
      children: [
        { name: "D1-child 1", href: "/", icon: ChartPieIcon, current: false },
        { name: "D1-child 2", href: "/", icon: ChartPieIcon, current: false },
      ],
    },
    {
      name: "Dropdown 2",
      href: "s/",
      icon: ChartPieIcon,
      current: false,

      children: [
        { name: "D2-child 1", href: "/", icon: ChartPieIcon, current: false },
        { name: "D2-child 2", href: "/", icon: ChartPieIcon, current: false },
      ],
    },
  ];

  function setActive(value) {
    if (open === value) {
      setopen(null);
    } else {
      setopen(value);
    }
  }

  return (
    <>
      {/*SideBar Options*/}
      <nav className="mt-8 xl:pr-8">
        <ul role="list" className="flex-1 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <span
                onClick={() => nav(item.href)}
                className={classNames(
                  item.href === pathname
                    ? "bg-blue-50 text-wcg_blue border-l-4 border-wcg_blue"
                    : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                  "group cursor-pointer flex pl-4 xl:pl-7 gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold "
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="lg:pl-2">{item.name}</span>
              </span>
            </li>
          ))}
        </ul>

        {/*Sidebar option with Dropdown Menu*/}
        <ul role="list" className="flex-1 space-y-1 ">
          {groupNavigation.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setActive(item.name);
              }}
            >
              <span
                to={"/"}
                className={classNames(
                  open === item.name
                    ? "bg-blue-50 text-wcg_blue  border-l-4 border-wcg_blue"
                    : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                  "group cursor-pointer flex pl-4 xl:pl-7 gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold relative"
                )}
              >
                <ChartPieIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="lg:pl-2">{item.name}</span>
                <ChevronUpIcon
                  className={`${
                    open === item.name ? "rotate-180" : ""
                  } transition-all duration-300 text-gray-400 font-bold h-5 w-5 absolute right-2 lg:!right-0 lg:px-0.5 top-3`}
                />
              </span>
              <ul
                className={`${
                  open === item.name ? "" : "!hidden "
                } transition-all duration-300`}
              >
                {item?.children?.map((childItem) => (
                  <li key={childItem?.name}>
                    <Link
                      to={"/"}
                      className={classNames(
                        false
                          ? "bg-blue-50 text-wcg_blue  border-l-4 border-wcg_blue"
                          : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                        "group cursor-pointer flex pl-4 xl:pl-7 gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold "
                      )}
                    >
                      <ChartPieIcon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="lg:pl-2">{childItem.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
