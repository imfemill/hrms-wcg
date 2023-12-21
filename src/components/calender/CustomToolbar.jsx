const CustomToolbar = ({ date, onNavigate }) => {
  const handleNavigate = (action) => {
    onNavigate(action);
  };

  // const handleViewChange = (selectedView) => {
  //   onViewChange(selectedView);
  // };

  return (
    <div className="custom-toolbar">
      <div>
        <button onClick={() => handleNavigate("PREV")}>Previous</button>
        <button onClick={() => handleNavigate("TODAY")}>Today</button>
        <button onClick={() => handleNavigate("NEXT")}>Next</button>
      </div>
      <div>
        <label>View:</label>
        {/* <select value={view} onChange={(e) => handleViewChange(e.target.value)}>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select> */}
      </div>
      <div>
        <span>{date.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default CustomToolbar;
