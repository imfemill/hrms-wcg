import LeaveCard from "../../components/cards/leaveCards/LeaveCard";
import { default as WidgetCard } from "../../components/cards/widgetCards/WidgetCard";
import widgetData from "../../data/widget.json";
import todayLeavesData from "../../data/todayLeaves.json";

const Dashboard = () => {
  return (
    <>
      <div className="select-none w-full flex-wrap">
        <div className="columns-1 flex gap-4 max-lg:flex-col">
          <div className="w-5/12 max-lg:w-full flex gap-4 flex-wrap order-1 max-lg:order-3 content-start justify-center">
            <div className="rounded-lg min-w-full flex justify-center bg-wcg_navy/5 min-h-[100%]"></div>
          </div>
          <div className="w-3/12 max-lg:w-full order-2 max-lg:order-2">
            <div className="rounded-lg min-w-full flex justify-center">
              <LeaveCard leaves={todayLeavesData} />
            </div>
          </div>
          <div className="w-4/12 max-lg:w-full flex gap-4 flex-wrap order-3 max-lg:order-1 content-start justify-center h-full">
            {widgetData?.map((widget, key) => {
              return <WidgetCard key={key} widget={widget} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
