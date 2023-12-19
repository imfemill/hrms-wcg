import LoginForm from "../../components/Forms/LoginForm";
import SignInImage from "../../assets/signin.svg";

const SignIn = () => {
  return (
    <section className="bg-[#E4F1FF]">
      <div className="min-h-screen min-w-screen bg-opacity-50 flex items-center justify-center">
        <div className="select-none md:m-10 max-lg:m-5 lg:w-3/4 max-lg:flex-col flex shadow-2xl rounded-lg">
          <div className="lg:w-1/2 p-10 bg-[#fefefe] flex order-1 max-lg:order-2 justify-center items-center rounded-l-lg max-lg:rounded-b-lg">
            <div className="my-10 max-lg:my-5">
              <h1 className="text-3xl flex font-semibold text-wcg_blue">
                Welcome HRMS
              </h1>
              <p className="text-xl pt-4 flex font-medium text-wcg_orange">
                {
                  "Empower your journey with HRMS – Welcome to efficiency unleashed!"
                }
              </p>

              <div className="pt-16">
                <LoginForm />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-wcg_blue flex justify-center order-2 max-lg:order-1 items-center p-10 rounded-r-lg max-lg:rounded-t-lg">
            <img src={SignInImage} alt="login" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
