import { Fragment, useMemo, useRef, useState } from "react";
import openCloseIcon from "../../assets/icons/arched-arrow.svg";
import ReactTable from "../reactTable/widget/WidgetTable";
import { widgetColumn } from "../reactTable/widget/widgetColumns";
import "./card.css";

const Card = ({ widget }) => {
  const columns = useMemo(() => widgetColumn(widget.title), [widget]);

  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease rotate-45");
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease rotate-45"
        : "transform duration-500 ease rotate-480",
    );
  };

  return (
    <div className="shadow-xl shadow-wcg_navy/20 p-5 block h-fit w-4/5 rounded-lg bg-blue-50">
      <div className="flex gap-0 justify-between px-5 py-4 rounded-t-lg">
        <div className="text-lg font-semibold text-wcg_blue hover:text-wcg_navy border-b-2 border-wcg_orange">
          {widget?.title}
        </div>
        <div onClick={() => toggleAccordion()} className="cursor-pointer">
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
      </div>
    </div>
  );
};

export default Card;
