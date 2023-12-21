import { Disclosure } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../utiles/navigation";
import { classNames } from "../utiles/util";

export default function SidebarMenu({ setSidebarOpen }) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [hover, setHover] = useState(false);

  return (
    <>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 mt-3">
          <li>
            <ul role="list" className="mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <span
                      onClick={() => {
                        nav(item.href);
                        setSidebarOpen && setSidebarOpen(false);
                      }}
                      className={classNames(
                        pathname === item.href
                          ? "bg-blue-50 text-wcg_blue"
                          : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                        "group flex items-center flex-row lg:flex-col gap-x-3 rounded-md p-2.5 py-3 text-xs font-semibold text-gray-400 lg:text-center cursor-pointer"
                      )}
                    >
                      <span className="flex lg:justify-center">
                        <item.icon
                          className="h-7 w-7 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                      {item.name}
                    </span>
                  ) : (
                    <Disclosure
                      as="div"
                      className="lg:relative group"
                      onMouseOver={() => setHover(true)}
                      onMouseLeave={() => {
                        setHover(false);
                        close();
                      }}
                    >
                      {({ open, close }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              pathname.includes(item.href)
                                ? "bg-blue-50 text-wcg_blue"
                                : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                              " flex flex-row lg:flex-col items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-400 relative outline-0"
                            )}
                          >
                            <span className="flex lg:justify-center">
                              <item.icon
                                className="h-7 w-7 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                            <ChevronLeftIcon
                              className={classNames(
                                open || hover
                                  ? "rotate-180 text-gray-500"
                                  : "text-gray-400",
                                "ml-auto h-5 w-5 shrink-0 absolute right-0 lg:top-6 rotate-10 transition-all duration-200"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <div className={`lg:absolute top-0 left-24`}>
                            <Disclosure.Panel
                              static={hover}
                              as="ul"
                              className="mt-1 unset lg:fixed bg-blue-50 rounded-lg group-hover:visible"
                            >
                              {item?.children?.map((subItem) => (
                                <li
                                  key={subItem?.name}
                                  onClick={() => {
                                    setHover(false);
                                    close();
                                    nav(subItem?.href);
                                    setSidebarOpen && setSidebarOpen(false);
                                  }}
                                >
                                  {/* 44px */}
                                  <Disclosure.Button
                                    as="div"
                                    className={classNames(
                                      pathname === subItem.href
                                        ? "bg-blue-50 text-wcg_blue border-l-4 border-wcg_blue"
                                        : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50 hover:border-l-4 border-wcg_blue",
                                      "group cursor-pointer flex gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold w-36 m-2"
                                    )}
                                  >
                                    <span className="flex">
                                      <subItem.icon
                                        className="h-7 w-7 shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      {subItem.name}
                                    </span>
                                  </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
