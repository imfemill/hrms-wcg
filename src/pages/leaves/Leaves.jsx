import { useMemo } from "react";
import Button from "../../components/button/button";
import LeaveCard from "../../components/leaveCard/LeaveCard";
import CustomTable from "../../components/table/CustomTable";

const Leaves = () => {
  const data = useMemo(
    () => [
      {
        applicantName: "Jatin",
        leaveType: "Casual",
        leaveDays: 1,
        leavetSatus: "Approved",
        leaveStart: "10-11-2023",
        leaveEnd: "17-11-2023",
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
        leaveStart: "26-12-2023",
        leaveEnd: "26-12-2023",
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
        leaveStart: "9-11-2023",
        leaveEnd: "9-11-2023",
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
        disableglobalfilter: true,
      },
      {
        Header: "Leave Type",
        accessor: "leaveType",
        disableglobalfilter: true,
      },
      {
        Header: "Leave Days",
        accessor: "leaveDays",
        disableSortBy: true,
        disableglobalfilter: true,
      },
      {
        Header: "Leave Status",
        accessor: "leavetSatus",
        disableglobalfilter: true,
      },
      {
        Header: "Leave Start",
        accessor: "leaveStart",
      },
      { Header: "Leave End", accessor: "leaveEnd" },
      {
        Header: "Action",
        accessor: "",
        disableSortBy: true,
        disableglobalfilter: true,
      },
    ],
    [],
  );

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row sm:justify-around gap-8 m-2">
        <LeaveCard
          title={"Monthly Paid Leaves"}
          takenLeave={2}
          allowedLeave={4}
        />
        <LeaveCard
          title={"Yearly Medical Leaves"}
          takenLeave={1}
          allowedLeave={4}
        />
        <LeaveCard
          title={"Monthly Unpaid Leaves"}
          takenLeave={0}
          allowedLeave={4}
        />
        <LeaveCard
          title={"Total Yearly Leaves"}
          takenLeave={3}
          allowedLeave={4}
        />
      </div>
      <div className="p-2 mt-8  rounded-lg drop-shadow-lg">
        <div className="flex justify-between m-2">
          <div className="text-2xl font-semibold">
            Leave List
            <div className="w-18 border-b-2 border-wcg_orange pb-1" />
          </div>
          <Button lable={"Add Leave"} />
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Leaves;
