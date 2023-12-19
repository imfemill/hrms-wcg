import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../assets/404.svg";

const NotFound = () => {
  const nav = useNavigate()
  return (
    <div className="min-h-screen min-w-screen gap-5 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-2 p-3.5 gap-5 order-1 max-lg:order-2 lg:px-5 lg:py-3 bg-wcg_blue/5 rounded-3xl text-wcg_navy/70">
        <span>Go to</span>
        <ChevronRightIcon className="w-6 h-6 cursor-pointer" />
        <div onClick={() => nav("/")}>
          <HomeIcon className="w-6 h-6 cursor-pointer text-wcg_orange/80 hover:text-wcg_orange" />
        </div>
      </div>
      <div className="select-none max-lg:m-1 flex shadow-2xl rounded-lg order-2 max-lg:order-1">
        <div className="bg-wcg_blue flex justify-center items-center p-10 rounded-xl">
          <img src={NotFoundImage} alt="calender" />
        </div>
      </div>
    </div>
  )
};

export default NotFound;
