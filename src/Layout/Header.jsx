import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../components/avatar/Avatar";
import { AddressBar } from "../components/breadCrumb/BredCrumb";
import Greetings from "../components/greetings/Greeitngs";
import { classNames } from "../utiles/util";

export default function Header({ setSidebarOpen }) {
  const nav = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [rotate, setRotate] = useState("transform duration-700 ease rotate-0");
  var name = "Krunal Bhuvad";

  const userNavigation = [
    { name: "Profile", href: "/profile", icon: UserCircleIcon },
    { name: "Sign out", href: "/signin", icon: ArrowRightOnRectangleIcon },
  ];

  return (
    <>
      <div className="lg:pl-28">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center bg-[#f9fdff] p-10 sm:gap-x-6 sm:px-6 lg:px-8">
          <Greetings />
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <AddressBar />

          <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-wcg_navy/70 hover:text-wcg_navy"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6 " aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-wcg_navy/10"
                aria-hidden="true"
              />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <Avatar name={name} className={""} />
                  <span
                    className="hidden lg:flex lg:items-center"
                    onClick={() => {
                      setExpanded((prevState) => !prevState);
                      setRotate(
                        expanded
                          ? "transform duration-500 ease rotate-0"
                          : "transform duration-500 ease rotate-180"
                      );
                    }}
                  >
                    <span
                      className="ml-4 text-sm font-semibold leading-6 text-wcg_navy/70"
                      aria-hidden="true"
                    >
                      {name}
                    </span>
                    <ChevronDownIcon
                      className={`ml-2 h-5 w-5 text-wcg_navy/70 hover:text-wcg_blue ${rotate}`}
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-40 mt-2.5 origin-top-right rounded-md bg-blue-50 py-2 shadow-lg ring-0 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <span
                            onClick={() => nav(item.href)}
                            className={classNames(
                              active
                                ? "bg-blue-50 text-wcg_blue border-l-4 border-wcg_blue"
                                : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                              "group cursor-pointer flex gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold "
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </span>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
