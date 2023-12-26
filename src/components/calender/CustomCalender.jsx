import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import "./calender.css";
import events from "./events";
import { useEffect } from "react";
const localizer = momentLocalizer(moment);
const CustomCalender = ({ currentDate, setCurrentDate, setShowEvent }) => {
  const handleNavigate = (action) => {
    // action can be 'PREV', 'NEXT', or 'TODAY'
    let newDate;
    console.log("Before==>>", moment(currentDate));
    switch (action) {
      case "PREV":
        newDate = moment(currentDate).subtract(1, "month").toDate();
        break;
      case "TODAY":
        newDate = new Date();
        break;
      case "NEXT":
        newDate = moment(currentDate).add(1, "month").toDate();
        break;
      case "Day":
        newDate = moment(currentDate).add(1, "month").toDate();
        break;
      default:
        newDate = currentDate;
    }

    console.log("After==>>", newDate);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    const selectedDay = moment(currentDate).format("YYYY-MM-DD");
    setCurrentDate(currentDate);
    // Check if there are any events on the selected day
    const eventsOnSelectedDay = events.filter(
      (event) =>
        moment(event.start).format("YYYY-MM-DD") === selectedDay ||
        moment(event.end).format("YYYY-MM-DD") === selectedDay,
    );

    if (eventsOnSelectedDay.length > 0) {
      setShowEvent(eventsOnSelectedDay);
    } else {
      setShowEvent([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  const handleSelectSlot = (slotInfo) => {
    const selectedDay = moment(slotInfo.start).format("YYYY-MM-DD");
    setCurrentDate(slotInfo.start);
    // Check if there are any events on the selected day
    const eventsOnSelectedDay = events.filter(
      (event) =>
        moment(event.start).format("YYYY-MM-DD") === selectedDay ||
        moment(event.end).format("YYYY-MM-DD") === selectedDay,
    );

    if (eventsOnSelectedDay.length > 0) {
      setShowEvent(eventsOnSelectedDay);
    } else {
      setShowEvent([]);
    }
  };

  return (
    <div className="h-[500px] max-h-[600px] w-9/10">
      <Calendar
        events={events}
        views={{
          month: true,
        }}
        step={60}
        localizer={localizer}
        date={currentDate} // Update this line
        // popup={false}
        onSelectSlot={handleSelectSlot}
        onShowMore={(events) => this.setState({ showModal: true, events })}
        components={{
          toolbar: (props) => (
            <CustomToolbar
              {...props}
              onNavigate={handleNavigate}
              currentDate={currentDate}
            />
          ),
        }}
        selectable={true}
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
};

export default CustomCalender;
