import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomCalender from "../../components/calender/CustomCalender";
import VerticalCarousel from "./VerticalCarousel";
import { useState } from "react";
// import 'react-calendar/dist/Calendar.css';
const Calender = () => {
  const [date, setDate] = useState({
    day: String(new Date().getDate()).padStart(2, "0"),
    month: String(new Date().getMonth() + 1).padStart(2, "0"),
    year: new Date().getFullYear(),
  });
  return (
    <div className="flex justify-evenly p-10 ">
      <div>
        <VerticalCarousel setDate={setDate} date={date} />
      </div>
      <div>
        {" "}
        <CustomCalender date={date} />{" "}
      </div>
    </div>
  );
};

export default Calender;
