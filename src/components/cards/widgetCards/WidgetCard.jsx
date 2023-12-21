import { Fragment, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import openCloseIcon from "../../../assets/icons/arched-arrow.svg";
import ReactTable from "../../reactTable/widget/WidgetTable";
import { widgetColumn } from "../../reactTable/widget/widgetColumns";
import "./card.css";

const WidgetCard = ({ widget }) => {
  const nav = useNavigate()
  const columns = useMemo(() => widgetColumn(widget.title), [widget]);

  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease rotate-45");
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight + 10}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease rotate-45"
        : "transform duration-500 ease rotate-480",
    );
  };

  return (
    <div className="shadow-xl shadow-wcg_navy/20 p-5 block h-fit w-11/12 rounded-lg bg-blue-50">
      <div
        className="flex gap-0 justify-between mx-5 my-4 rounded-t-lg"
      >
        <div onClick={() => toggleAccordion()} className="text-lg font-semibold text-wcg_blue hover:text-wcg_navy border-b-2 border-wcg_orange cursor-pointer">
          {widget?.title}
        </div>
        <div className="cursor-pointer flex items-center" onClick={() => toggleAccordion()}>
          <img
            src={openCloseIcon}
            alt="leaves"
            className={`h-5 w-5 ${rotate}`}
          />
        </div>
      </div>
      <div className="flex gap-3 justify-between w-full p-5">
        {widget?.states.map((state, key) => (
          <Fragment key={key}>
            <div className={`w-1${widget?.states.length} flex flex-col`}>
              <div className="text-xl font- text-wcg_navy/70">
                {state.count}
              </div>
              <div className="text-sm font-medium text-wcg_navy/80">
                {state?.name}
              </div>
            </div>
            {widget?.states?.length > 1 &&
              key + 1 !== widget?.states?.length && (
                <div
                  className="hidden lg:block lg:w-px lg:bg-wcg_navy/10"
                  aria-hidden="true"
                />
              )}
          </Fragment>
        ))}
      </div>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-500 ease-in-out data_table"
      >
        <div className="w-full">
          <ReactTable columns={columns} data={widget?.table} />
        </div>
        {
          widget?.type === "MORE_LEAVES" &&
          <div className="my-4 w-full flex justify-end">
            <span className="bg-wcg_navy/80 hover:bg-wcg_navy cursor-pointer rounded-lg text-wcg_lightblue p-2"
              onClick={() => nav("/leaves")}>
              View More
            </span>
          </div>
        }
      </div>
    </div>
  );
};

export default WidgetCard;
