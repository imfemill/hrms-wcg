import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { Navigate } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css";
const CustomToolbar = (props) => {
  const goToDayView = () => {
    props.onView("day");
  };

  const goToWeekView = () => {
    props.onView("week");
  };

  const goToMonthView = () => {
    props.onView("month");
  };

  const goToBack = () => {
    props.onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    props.onNavigate(Navigate.NEXT);
  };

  const goToToday = () => {
    props.onNavigate(Navigate.TODAY);
  };

  // const goToSpecificDate = (newDate) => {
  //   props.onNavigate(Navigate.DATE, newDate);
  // };

  return (
    <div>
      <label className="">{moment(props.date).format("DD/MM/YYYY")}</label>

      <div className="flex justify-between  py-1">
        <div>
          <button onClick={goToBack} className="mx-2 p-2">
            <ChevronLeftIcon
              className={`h-5 w-5 text-wcg_blue hover:text-wcg_navy `}
            />
          </button>
          <button onClick={goToToday} className="mx-2 p-2">
            today
          </button>
          <button onClick={goToNext} className="mx-2 p-2">
            <ChevronRightIcon
              className={`h-5 w-5 text-wcg_blue hover:text-wcg_navy `}
            />
          </button>
        </div>
        <div>
          <button onClick={goToMonthView} className="mx-2">
            month
          </button>
          <button onClick={goToWeekView} className="mx-2">
            week
          </button>
          <button onClick={goToDayView} className="mx-2">
            day
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CustomToolbar;
