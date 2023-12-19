import PasswordResetForm from "../../components/Forms/PasswordResetForm";
import ResetImage from "../../assets/passwordReset.svg";

const SignIn = () => {
  return (
    <section className="bg-[#E4F1FF]">
      <div className="min-h-screen min-w-screen bg-opacity-50 flex items-center justify-center">
        <div className="select-none md:m-10 max-lg:m-5 lg:min-w-min max-lg:flex-col flex shadow-2xl rounded-lg">
          <div className="lg:w-1/2 p-10 max-lg:p-5 bg-[#fefefe] flex order-1 max-lg:order-2 justify-center items-center rounded-l-lg max-lg:rounded-b-lg">
            <div className="my-5 w-4/6">
              <h1 className="text-3xl flex font-semibold text-wcg_blue">
                Forgot Password?
              </h1>

              <div className="pt-16">
                <PasswordResetForm />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-wcg_blue flex justify-center order-2 max-lg:order-1 items-center p-10 rounded-r-lg max-lg:rounded-t-lg">
            <img src={ResetImage} alt="login" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
