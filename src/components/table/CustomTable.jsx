import { useCallback } from "react";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import Datepicker from "react-tailwindcss-datepicker";
import Button from "../button/button";
import Select from "../select/Select";

export default function CustomTable({ columns, data }) {
  const leaveType = ["Casual", "Medical"];
  const leaveStatus = ["Requested", "Approved", "Rejected"];

  const customFilter = useCallback((rows, ids, query) => {
    return rows.filter(
      (row) =>
        row.values["leaveStart"]?.includes(fomateDate(query?.startDate)) &&
        row.values["leaveEnd"]?.includes(fomateDate(query?.endDate)),
    );
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      globalFilter: customFilter,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? "  🔽" : "  🔼") : "";
  };

  const fomateDate = (date) => {
    let temp = date?.split("-");
    let final = temp && temp[2] + "-" + temp[1] + "-" + temp[0];
    return final;
  };

  const handleValueChange = () => {
    //do something
  };

  return (
    <>
      <div className="w-full flex justify-around  gap-6 my-6">
        <Select options={leaveType} placeholder={"Select Leave type"} />
        <Select options={leaveStatus} placeholder={"Select Leave Status"} />
        <Datepicker
          inputClassName="w-full p-2.5 rounded-md font-normal outline-0"
          separator=" To "
          showShortcuts={true}
          showFooter={true}
          // disabledDates={[
          //   {
          //     startDate: "2023-02-05",
          //     endDate: "2023-02-05",
          //   },
          // ]}
          configs={{
            shortcuts: {
              today: "Today",
              yesterday: "Yesterday",
              past: (period) => `Last ${period} Day`,
              currentMonth: "Current Month",
              pastMonth: "Last Month",
            },
            footer: {
              cancel: "Cancel",
              apply: "Apply",
            },
          }}
          placeholder={"Select Date"}
          primaryColor={"orange"}
          // value={value}
          onChange={handleValueChange}
          displayFormat={"DD-MM-YYYY"}
        />
        <Button lable={"Search"} />
        <Button lable={"Reset"} />
      </div>

      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-blue-200"
      >
        <thead className="bg-wcg_blue text-white border-b-2">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="py-3 px-2 text-xs font-bold hover:cursor-pointer tracking-wider text-center text-white uppercase "
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </div>
                  {/* <Filter column={column} /> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className=" bg-white border-b-2 divide-y divide-blue-200"
        >
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      key={index}
                      {...cell.getCellProps()}
                      className="py-4 px-2 text-center text-sm text-gray-700 break-words"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
