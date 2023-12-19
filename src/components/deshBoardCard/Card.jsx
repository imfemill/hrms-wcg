import { useMemo, useRef, useState } from "react";
import { data } from "../../data/users.json";
import ReactTable from "../reactTableComponent/ReactTable";
import "./card.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const cardData = [
  { id: 1, value: 10, data: "Total Leave" },
  { id: 2, value: 6, data: "Total Approved Leave" },
  { id: 3, value: 4, data: "Total Pending Leave" },
];

const Card = () => {
  const columns = useMemo(
    () => [
      {
        header: " Name",
        accessor: "name",
      },
      {
        header: " age",
        accessor: "age",
      },
      {
        header: " phone",
        accessor: "phone",
      },
      {
        header: " city",
        accessor: "city",
      },
    ],
    [],
  );

  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease"
        : "transform duration-500 ease -rotate-180",
    );
  };
  return (
    <div className="bg-white shadow-xl p-4 rounded-md ">
      <div className="flex justify-between">
        <div>My Leave</div>
        <div onClick={() => toggleAccordion()} className="cursor-pointer">
          <ChevronDownIcon
            className={`h-5 w-5 text-wcg_blue hover:text-wcg_navy ${rotate}`}
          />
        </div>
      </div>
      <div className="flex gap-3 my-4 ">
        {cardData.map((val) => (
          <div key={val.id} className="flex flex-col ">
            <div className="text-xl font-semibold">{val.value}</div>
            <div className="text-xs">{val.data}</div>
          </div>
        ))}
      </div>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-500 ease-in-out data_table"
      >
        <div className="">
          <ReactTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Card;
