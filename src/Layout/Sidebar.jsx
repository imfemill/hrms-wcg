import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar({ setSidebarOpen, sidebarOpen }) {
  const nav = useNavigate();

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

                  <div className="flex grow flex-col gap-y-5 overflow-y-visible bg-white pr-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <div className="w-16 ml-1 border-b-4 border-wcg_orange pb-2">
                        <span
                          className="font-bold text-wcg_blue ml-2 text-3xl cursor-pointer"
                          onClick={() => nav("/")}
                        >
                          HRMS
                        </span>
                      </div>
                    </div>
                    <SidebarMenu setSidebarOpen={setSidebarOpen} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:!w-28 lg:overflow-y-hidden lg:bg-white transition-all">
          <div className="flex h-20 shrink-0 items-center justify-center">
            <div className="w-16 border-b-4 border-wcg_orange pb-2">
              <span
                className="font-bold text-wcg_blue lg:text-3xl cursor-pointer"
                onClick={() => nav("/")}
              >
                HRMS
              </span>
            </div>
          </div>
          <SidebarMenu setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </>
  );
}
