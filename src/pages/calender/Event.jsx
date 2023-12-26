import { useMemo } from "react";
import { Avatar } from "../../components/avatar/Avatar";
import EventTable from "./EventTable";

const getDate = (dateString) => {
  const dateTime = new Date(dateString);
  return ` ${dateTime.getDate()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getFullYear()}`;
};
const getTime = (dateString) => {
  const dateTime = new Date(dateString);
  return `${dateTime.getHours()}:${dateTime.getMinutes()}`;
};

const Event = ({ showEvent }) => {

  const birthdayColumns = useMemo(
    () => [
      {
        header: "",
        accessor: "title",
        Cell: (cellInfo) => (
          <div className="p-4 gap-2 flex-col flex bg-wcg_blue/10 rounded-xl">
            <span className="flex justify-start gap-2">
              <Avatar
                name={cellInfo?.row?.original?.title}
                className={"lg:px-2"}
              />
              <span className="text-start">
                <span className="text-base text text-wcg_navy w-10.5/12">
                  {cellInfo?.row?.original?.title}
                </span>
                <span className="flex gap-1 text-xs text-wcg_navy/70">
                  Date: <span>{cellInfo?.row?.original?.startDate}</span>
                </span>
              </span>
            </span>
          </div>
        ),
      },
    ],
    []
  );
  const leavesColumns = useMemo(
    () => [
      {
        header: "",
        accessor: "title",
        Cell: (cellInfo) => (
          <div className="p-4 gap-2 flex-col flex bg-wcg_blue/10 rounded-xl">
            <span className="flex justify-start gap-2">
              <Avatar
                name={cellInfo?.row?.original?.title}
                className={"lg:px-2"}
              />
              <span className="text-start">
                <span className="text-base text text-wcg_navy w-10.5/12">
                  {cellInfo?.row?.original?.title}
                </span>
                <span className="flex gap-1 text-xs text-wcg_navy/70">
                 Day: <span>{cellInfo?.row?.original?.startDate}</span>
                  <span>to</span>
                  <span>{cellInfo?.row?.original?.endDate}</span>
                </span>
              </span>
            </span>
          </div>
        ),
      },
    ],
    []
  );
  const meetingColumns = useMemo(
    () => [
      {
        header: "",
        accessor: "title",
        Cell: (cellInfo) => (
          <div className="p-4 gap-2 flex-col flex bg-wcg_blue/10 rounded-xl">
            <span className="flex justify-start gap-2">
              <Avatar
                name={cellInfo?.row?.original?.title}
                className={"lg:px-2"}
              />
              <span className="text-start">
                <span className="text-base text text-wcg_navy w-10.5/12">
                  {cellInfo?.row?.original?.title}
                </span>
                <span className="flex gap-1 text-xs text-wcg_navy/70">
                 Time : <span>{cellInfo?.row?.original?.startTime}</span>
                  <span>to</span>
                  <span>{cellInfo?.row?.original?.endTime}</span>
                </span>
              </span>
            </span>
          </div>
        ),
      },
    ],
    []
  );

  const formattedData = showEvent.map((event) => {
    const startDateTime = new Date(event.start);
    const endDateTime = new Date(event.end);

    return {
      ...event,
      startDate: getDate(startDateTime),
      startTime: getTime(startDateTime),
      endDate: getDate(endDateTime),
      endTime: getTime(endDateTime),
    };
  });

  const birthdayData = formattedData.filter((data) => data.type === "birthday");
  const leavesData = formattedData.filter((data) => data.type === "leave");
  const meetingData = formattedData.filter((data) => data.type === "meeting");

  return formattedData.length ? (
    <div className=" block h-fit w-11/12 rounded-lg">
      <div className="w-full my-2">
        {birthdayData.length ? (
          <EventTable
            columns={birthdayColumns}
            data={birthdayData}
            title={`BirthDay`}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="w-full my-2">
        {leavesData.length ? (
          <EventTable
            columns={leavesColumns}
            data={leavesData}
            title={`Leaves`}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="w-full my-2">
        {meetingData.length ? (
          <EventTable
            columns={meetingColumns}
            data={meetingData}
            title={`Meeting`}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <div className="  shadow-xl shadow-wcg_navy/20 p-5 block h-fit w-11/12 rounded-lg bg-blue-50 text-center ">No Event  </div>
  );
};

export default Event;
