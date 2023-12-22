import Button from "../../components/button/button";
import LeaveCard from "../../components/leaveCard/LeaveCard";
import Select from "../../components/select/Select";
import CustomTable from "../../components/table/CustomTable";

const Leaves = () => {
  const leaveType = ["Casual", "Medical"];
  const leaveStatus = ["Requested", "Approved", "Rejected"];

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
      <div className="p-2 mt-8 bg-blue-50 rounded-lg drop-shadow-lg">
        <div className="flex justify-between m-2">
          <div className="text-2xl font-semibold">
            Leave List
            <div className="w-18 border-b-4 border-wcg_orange pb-2" />
          </div>
          <Button lable={"Add Leave"} />
        </div>
        <div className="w-full flex justify-around  gap-6 my-6">
          <Select options={leaveType} />
          <Select options={leaveStatus} />
          <Button lable={"Search"} />
          <Button lable={"Reset"} />
        </div>
        <CustomTable />
      </div>
    </>
  );
};

export default Leaves;
