import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import "./calender.css";
import events from "./events";
const localizer = momentLocalizer(moment);
const CustomCalender = ({  currentDate, setCurrentDate ,setShowEvent}) => {

  const handleNavigate = (action) => {
    // action can be 'PREV', 'NEXT', or 'TODAY'
    console.log(action);
    let newDate;

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
      default:
        newDate = currentDate;
    }

    setCurrentDate(newDate);
    console.log(currentDate);
  };


  const handleSelectSlot = (slotInfo) => {
    const selectedDay = moment(slotInfo.start).format('YYYY-MM-DD');

    // Check if there are any events on the selected day
    const eventsOnSelectedDay = events.filter(
      (event) =>
        moment(event.start).format('YYYY-MM-DD') === selectedDay ||
        moment(event.end).format('YYYY-MM-DD') === selectedDay
    );

    if (eventsOnSelectedDay.length > 0) {
      console.log('Events on selected day:', eventsOnSelectedDay);
      setShowEvent(eventsOnSelectedDay)
    } else {
      console.log('No events on selected day');
    }
  };
 

  return (
    <div className="h-[500px] w-9/10  p-10 ">
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
