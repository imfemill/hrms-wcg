import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

export default function CustomTable() {
  const data = useMemo(
    () => [
      {
        applicantName: "Jatin",
        leaveType: "Casual",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Femil",
        leaveType: "Casual",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Yash",
        leaveType: "Medical",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Kishan",
        leaveType: "Medical",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Milan",
        leaveType: "Medical",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Krunal",
        leaveType: "Medical",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
      {
        applicantName: "Vipul",
        leaveType: "Medical",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "10-11-2023",
        Action: "",
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: "Applicant Name",
        accessor: "applicantName",
        disableSortBy: true,
      },
      { Header: "Leave Type", accessor: "leaveType" },
      { Header: "Leave Days", accessor: "leaveDays", disableSortBy: true },
      { Header: "Leave Status", accessor: "leavetSatus" },
      { Header: "Leave Start", accessor: "leaveStart" },
      { Header: "Leave End", accessor: "leaveEnd" },
      { Header: "Action", accessor: "", disableSortBy: true },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? "  🔽" : "  🔼") : "";
  };

  return (
    <>
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-blue-200"
      >
        <thead className="bg-wcg_blue text-white border-b-2">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-3 px-2 text-xs font-bold hover:cursor-pointer tracking-wider text-center text-white uppercase "
                >
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
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
