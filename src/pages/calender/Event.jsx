import { useMemo } from "react";
import ReactTable from "../../components/reactTable/widget/WidgetTable";

const Event = ({ showEvent }) => {
  console.log(showEvent);
  const columns = useMemo(
    () => [
      {
        header: "",
        accessor: "title",
      },
    ],
    [],
  );
  return (
    <>
      <div className="w-full">
        <ReactTable columns={columns} data={showEvent} type={"TODAYS_LEAVES"} />
      </div>
    </>
  );
};

export default Event;
