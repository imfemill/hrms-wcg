import { useTable } from "react-table";

// eslint-disable-next-line react/prop-types
const ReactTable = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });
  return (
    <table {...getTableProps()} className="table-auto border-collapse w-full ">
      <thead className="bg-gray-100">
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps()}
                className="p-2 "
                key={index}
              >
                {column.render("header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={i % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
              key={i}
            >
              {row.cells.map((cell, index) => (
                <td
                  {...cell.getCellProps()}
                  className=" p-2 text-center font-light"
                  key={index}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
