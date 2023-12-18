import Card from "../../components/deshBoardCard/Card";

const Dashboard = () => {
  return (
    <div className="flex gap-4 justify-evenly flex-wrap">
      <div className="w-2/5 ">
        <Card />
      </div>
      <div className="w-2/5 ">
        <Card />
      </div>
      <div className="w-2/5 ">
        <Card />
      </div>
      <div className="w-2/5 ">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
