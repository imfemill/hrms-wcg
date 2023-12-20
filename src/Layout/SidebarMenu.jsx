import { ChartPieIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SidebarMenu({ navigation, classNames }) {
  const [open, setOpen] = useState(null); // dropdown open/close
  const nav = useNavigate();
  const { pathname } = useLocation();

  function setActive(value) {
    if (open === value) {
      setOpen(null);
    } else {
      setOpen(value);
    }
  }

  return (
    <>
      {/*SideBar Options*/}
      <nav className="mt-8">
        <ul role="list" className="space-y-1">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="flex justify-center px-1"
              onClick={() => setActive(item.name)}
            >
              <span
                onClick={() => nav(item.href)}
                className={classNames(
                  item.href === pathname
                    ? "bg-blue-50 text-wcg_blue rounded-r-lg border-wcg_navy border-l-4"
                    : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50 ",
                  "cursor-pointer rounded-r-md text-xs font-medium p-2.5 text-center w-full justify-center relative",
                )}
              >
                <div className="flex lg:flex-col items-center lg:justify-center gap-x-2 ">
                  <item.icon className="h-7 w-7 shrink-0 " aria-hidden="true" />
                  {item.name}
                  {item?.children && (
                    <ChevronLeftIcon
                      className={`${open === item.name ? "rotate-180" : ""
                        } transition-all duration-300 text-wcg_blue font-bold h-5 w-5 absolute right-2 lg:!right-0 lg:px-0.5 top-5`}
                    />
                  )}
                  {item?.children && (
                    <div className="absolute top-0 right-2">
                      <ul
                        className={`${open === item.name ? "" : "!hidden "
                          } transition-all duration-300 fixed left-28 z-10 origin-top-right rounded-md bg-white shadow-lg `}
                      >
                        {item?.children?.map((childItem) => (
                          <li key={childItem?.name} className="flex">
                            <div
                              onClick={() => nav(childItem?.href)}
                              className={classNames(
                                open === item.name
                                  ? "bg-blue-50 text-wcg_blue  border-l-4 border-wcg_blue"
                                  : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                                "group cursor-pointer px-2 gap-x-3 rounded-r-md p-2 text-sm leading-6 font-semibold w-full",
                              )}
                            >
                              <div className="flex">
                                <ChartPieIcon
                                  className="h-7 w-7 shrink-0"
                                  aria-hidden="true"
                                />
                                <span className="justify-center">
                                  {childItem.name}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
