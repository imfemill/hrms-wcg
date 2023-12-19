import TeamImage from "../../assets/team.svg";

const Team = () => {
  return (
    <div className="bg-opacity-50 flex items-center justify-center">
      <div className="select-none max-lg:m-1 lg:w-2/3 flex shadow-2xl rounded-lg">
        <div className="lg:w-1/2 p-10 bg-[#fefefe] flex justify-center items-center rounded-l-lg">
          <div className="my-14">
            <h1 className="text-3xl flex font-semibold text-wcg_blue">Team</h1>
          </div>
        </div>
        <div className="lg:w-1/2 bg-wcg_blue flex justify-center items-center p-10 rounded-r-lg">
          <img src={TeamImage} alt="team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
