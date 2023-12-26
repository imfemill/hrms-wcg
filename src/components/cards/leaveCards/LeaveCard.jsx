import { useMemo, useRef, useState } from "react";
import { Avatar } from "../../avatar/Avatar";
import ReactTable from "../../reactTable/widget/WidgetTable";
import "./card.css";

const LeaveCard = ({ leaves }) => {
  var [title, total] = ["Today's Leaves", leaves?.length];
  const columns = useMemo(
    () => [
      {
        header: "",
        accessor: "name",
        Cell: (cellInfo) => (
          <div className="p-4 gap-2 flex-col flex bg-wcg_blue/10 rounded-xl">
            <span className="flex justify-start gap-2">
              <Avatar
                name={cellInfo?.row?.original?.name}
                className={"lg:px-2"}
              />
              <span className="text-start">
                <span className="text-base text text-wcg_navy w-10.5/12">
                  {cellInfo?.row?.original?.name}
                </span>
                <span className="flex gap-1 text-xs text-wcg_navy/70">
                  <span>{cellInfo?.row?.original?.from}</span>
                  <span>to</span>
                  <span>{cellInfo?.row?.original?.to}</span>
                </span>
              </span>
            </span>
          </div>
         
        ),
      },
    ],
    [],
  );
  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState(
    "transform duration-700 ease rotate-[1deg]",
  );
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease rotate-[1deg]"
        : "transform duration-500 ease rotate-[359deg]",
    );
  };

  return (
    <div className="shadow-xl shadow-wcg_navy/20 p-5 block h-fit w-11/12 rounded-lg bg-blue-50">
      <div className="flex gap-0 justify-between my-4 rounded-t-lg max">
        <div
          onClick={() => toggleAccordion()}
          className="text-lg font-semibold text-wcg_blue hover:text-wcg_navy border-b-2 border-wcg_orange cursor-pointer"
        >
          {title}
        </div>
        <span
          className={`bg-wcg_navy/90 text-wcg_gray p-1 px-2 space-y-0 rounded-lg cursor-pointer ${rotate}`}
          onClick={() => toggleAccordion()}
        >
          {total}
        </span>
      </div>

      <div
        ref={contentSpace}
        style={{ height: `${height}` }}
        className="overflow-auto transition-max-height max-h-96 duration-500 ease-in-out data_table"
      >
        <div className="w-full text-sm flex flex-col max-h-96 gap-4 max-lg:flex-row max-lg:flex-wrap">
          {
            <div className="w-full">
              <ReactTable
                columns={columns}
                data={leaves}
                type={"TODAYS_LEAVES"}
              />
            </div>
          }
          {/* {leaves?.map((leaves, key) => {
            return (
              <div key={key} className="p-4 gap-2 flex-col flex bg-wcg_blue/10 rounded-xl">
                <span className="flex justify-start gap-2">
                  <Avatar name={leaves?.name} className={"w-2.5/12"} />
                  <span>
                    <span className="text-base text-wcg_navy w-10.5/12">{leaves?.name}</span>
                    <span className="flex gap-1 text-xs">
                      <span>{leaves?.from}</span>
                      <span>to</span>
                      <span>{leaves?.to}</span>
                    </span>
                  </span>
                </span>
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
