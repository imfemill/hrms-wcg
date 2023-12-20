export const widgetColumn = (type) => {
  return data[type];
};

var data = {
  "My Leaves": [
    {
      header: "Assignee Name",
      accessor: "assignee_name",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Days",
      accessor: "days",
    },
    {
      header: "Status",
      accessor: "status",
    },
    {
      header: "Leave Type",
      accessor: "type",
    },
  ],
  "Upcoming Birthdays": [
    {
      header: "Name",
      accessor: "person_name",
    },
    {
      header: "Role",
      accessor: "role",
    },
    {
      header: "Department",
      accessor: "department",
    },
    {
      header: "Birthday",
      accessor: "dob",
    },
  ],
  "Upcoming Holidays": [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Date",
      accessor: "date",
    },
  ],
  "Upcoming Events": [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Private",
      accessor: "private",
    },
    {
      header: "Created By",
      accessor: "created_by",
    },
  ],
};
