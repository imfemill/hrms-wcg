// import morning from "../../assets/icons/morning2.svg";
// import afternoon from "../../assets/icons/afternoon.svg";
// import evening from "../../assets/icons/evening2.svg";

const Greetings = () => {
  var today = new Date();
  var hourNow = today.getHours();
  var name = "Femil";

  return (
    <span className="text-3xl max-lg:text-lg font-medium text-wcg_blue flex">
      {hourNow < 12
        ? `Good morning, ${name}!`
        : hourNow < 20
          ? `Good afternoon, ${name}!`
          : hourNow < 24
            ? `Good evening, ${name}!`
            : `Welcome, ${name}!`}
      {
        // hourNow < 12
        //     ? <img src={morning} className={`h-14 max-lg:h-10`} alt="morning" />
        //     : hourNow < 19
        //         ? <img src={afternoon} className={`h-16 max-lg:h-10`} alt="afternoon" />
        //         : hourNow < 24
        //             ? <img src={evening} className={`h-16 max-lg:h-10`} alt="evening" />
        //             : ``
      }
    </span>
  );
};

export default Greetings;
