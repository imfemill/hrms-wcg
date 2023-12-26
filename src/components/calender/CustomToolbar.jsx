import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CustomToolbar = ({ date, onNavigate }) => {
  const handleNavigate = (action) => {
    onNavigate(action);
  };

  // const handleViewChange = (selectedView) => {
  //   onViewChange(selectedView);
  // };

  return (
    <div className="custom-toolbar flex justify-between items-center p-3 rounded-md">
    <div>
      <span className="text-lg font-semibold">{date.toLocaleDateString()}</span>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={() => handleNavigate("PREV")} className="text-wcg_blue hover:text-wcg_navy">
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button onClick={() => handleNavigate("TODAY")} className="px-3 py-1 hover:bg-wcg_powderBlue rounded-md">
        Today
      </button>
      <button onClick={() => handleNavigate("NEXT")} className="text-wcg_blue hover:text-wcg_navy">
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  </div>
  
  );
};

export default CustomToolbar;
