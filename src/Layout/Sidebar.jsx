import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({
  setSidebarOpen,
  sidebarOpen,
  navigation,
  classNames,
}) {
  const nav = useNavigate()
  const { pathname } = useLocation()
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white pr-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 flex-1 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <span
                              to={item.href}
                              className={classNames(
                                item.href === pathname
                                  ? "bg-blue-50 text-wcg_blue"
                                  : "text-gray-400 hover:text-wcg_blue hover:bg-gray-50",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ",
                              )}
                              onClick={() => nav(item.href)}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-14 xl:!w-[14%]  lg:hover:w-[20%] lg:overflow-y-auto lg:pb-4 transition-all bg-[#ffffff]">
          <div className="flex h-20 shrink-0 items-center pl-[12%]">
            <div className="w-4/6  border-b-4 border-wcg_orange pb-2" >
              <span className="font-bold text-wcg_blue text-3xl cursor-pointer" onClick={() => nav("/")}>HRMS</span>
            </div>
          </div>
          <nav className="mt-8 lg:pr-10">
            <ul role="list" className="flex-1 space-y-1 ">
              {navigation.map((item) => (
                <li key={item.name}>
                  <span
                    onClick={() => nav(item.href)}
                    className={classNames(
                      item.href === pathname
                        ? "bg-blue-50 text-wcg_blue  border-l-4 border-wcg_blue"
                        : "text-gray-400 hover:text-wcg_blue hover:bg-blue-50",
                      "group cursor-pointer flex lg:pl-7 gap-x-3 rounded-r-md p-2.5 text-sm leading-6 font-semibold",
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="lg:pl-1 lg: invisible lg:visible ">
                      {item.name}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
