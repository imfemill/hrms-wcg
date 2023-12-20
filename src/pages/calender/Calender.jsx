import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css";
import CustomToolbar from "./CustomToolbar";
// import 'react-calendar/dist/Calendar.css';
const Calender = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div
      /* style={{ height: 700 ,width:"90%" }} */ className="h-[500px] w-9/10 flex justify-end p-10 "
    >
      <div></div>
      <Calendar
        // events={events}
        step={60}
        localizer={localizer}
        // views={allViews}
        defaultDate={new Date(2015, 3, 1)}
        popup={false}    
        onSelectSlot={(slotInfo) => {
          console.log(slotInfo)
      }}
        onShowMore={(events, date) =>
          this.setState({ showModal: true, events })
        }
        components={{
          // event: Event,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default Calender;
