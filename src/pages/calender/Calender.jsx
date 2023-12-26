import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomCalender from "../../components/calender/CustomCalender";
import VerticalCarousel from "./VerticalCarousel";
import { useState } from "react";
import Event from "./Event";
// import 'react-calendar/dist/Calendar.css';
const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEvent, setShowEvent] = useState([]);
  return (
    <div className="flex justify-evenly h-full  ">
      <div>
        <VerticalCarousel
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div className="flex flex-col">
        {" "}
        <CustomCalender
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          setShowEvent={setShowEvent}
        />{" "}
        {/* <div className="bg-wcg_orange h-9">

        </div> */}
      </div>
      <div className="w-[500px] ">
        {" "}
        <Event showEvent={showEvent} />{" "}
      </div>
    </div>
  );
};

export default Calender;
