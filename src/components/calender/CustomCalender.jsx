import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import "./calender.css";
import events from "./events";
import { useState } from "react";
const CustomCalender = ({ date }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const localizer = momentLocalizer(moment);
  const handleNavigate = (action) => {
    // action can be 'PREV', 'NEXT', or 'TODAY'
    console.log(action);
    setCurrentDate((prevDate) =>
      moment(prevDate).add(action, "month").toDate(),
    );
  };

  //   const handleViewChange = (view) => {
  //     setCurrentView(view);
  //   };
  return (
    <div className="h-[500px] w-9/10  p-10 ">
      <Calendar
        events={events}
        views={{
          month: true,
        }}
        step={60}
        localizer={localizer}
        // views={allViews}
        date={new Date(date.year, date.month, date.day)}
        defaultDate={new Date(date.year, date.month, date.day)}
        popup={false}
        onSelectSlot={(slotInfo) => {
          console.log(slotInfo.action);
        }}
        onShowMore={(events) => this.setState({ showModal: true, events })}
        components={{
          //   event: Event,
          toolbar: (props) => (
            <CustomToolbar
              {...props}
              onNavigate={handleNavigate}
              //   onViewChange={handleViewChange}
              currentDate={currentDate}
              //   currentView={currentView}
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
