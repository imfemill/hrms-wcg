import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import ReactTable from "../../components/reactTable/widget/WidgetTable";

const EventTable = ({ title, columns, data }) => {
  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(true);
  const [height, setHeight] = useState(
    `${contentSpace?.current?.scrollHeight + 10}px`,
  );
  const [rotate, setRotate] = useState(
    "transform duration-500  ease -rotate-180",
  );
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight + 10}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease rotate-0"
        : "transform duration-500 ease -rotate-180",
    );
  };
  return (
    <div className="shadow-xl shadow-wcg_navy/20 p-1 block h-fit w-full rounded-lg bg-blue-50">
      <div className="flex gap-0 justify-between mx-5 my-4 rounded-t-lg">
        <div
          onClick={() => toggleAccordion()}
          className="text-lg font-semibold text-wcg_blue hover:text-wcg_navy border-b-2 border-wcg_orange cursor-pointer"
        >
          {title}
        </div>
        <div
          className="cursor-pointer flex items-center"
          onClick={() => toggleAccordion()}
        >
          <ChevronDownIcon
            className={`ml-2 h-5 w-5 text-wcg_navy/70 hover:text-wcg_blue ${rotate}`}
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        ref={contentSpace}
        style={{ height: `${height}` }}
        className="overflow-auto transition-max-height duration-500 ease-in-out data_table max-h-60"
      >
        <div className="w-full">
          <ReactTable columns={columns} data={data} type={"TODAYS_LEAVES"} />
        </div>
        {/* {widget?.type === "MORE_LEAVES" && (
        <div className="my-4 w-full flex justify-end">
          <span
            className="bg-wcg_navy/80 hover:bg-wcg_navy cursor-pointer rounded-lg text-wcg_lightblue p-2"
            onClick={() => nav("/leaves")}
          >
            View More
          </span>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default EventTable;
