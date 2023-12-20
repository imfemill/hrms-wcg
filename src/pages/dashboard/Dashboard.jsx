import Card from "../../components/cards/WidgetCard";
import widgetData from "../../data/widget.json";

const Dashboard = () => {
  return (
    <>
      <div className="select-none w-full flex-wrap">
        <div className="columns-1 flex max-lg:flex-col">
          <div className="w-2/3 max-lg:w-full flex gap-4 flex-wrap order-1 max-lg:order-2 content-start justify-center bg-wcg_navy/5 min-h-[100%]"></div>
          <div className="w-1/3 max-lg:w-full flex gap-4 flex-wrap order-2 max-lg:order-1 content-start justify-center h-[100%]">
            {widgetData?.map((widget, key) => {
              return <Card key={key} widget={widget} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
