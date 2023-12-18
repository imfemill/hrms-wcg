import LoginForm from "../../components/Forms/LoginForm";
import SignInImage from "../../assets/signin.svg"

const SignIn = () => {
    return (
        <section className="bg-[#E4F1FF]">
            <div className="h-screen w-screen bg-opacity-50 flex items-center justify-center">
                <div className="select-none max-lg:m-1 lg:w-2/3 flex shadow-2xl rounded-lg">
                    <div className="lg:w-1/2 p-10 bg-[#fefefe] flex justify-center items-center rounded-l-lg">
                        <div className="my-14">
                            <h1 className="text-3xl flex font-semibold text-wcg_blue">Welcome HRMS</h1>
                            <p className="text-xl pt-4 flex font-medium text-wcg_orange">
                                {"Empower your journey with HRMS – Welcome to efficiency unleashed!"}
                            </p>

                            <div className="pt-16">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-wcg_blue flex justify-center items-center p-10 rounded-r-lg">
                        <img src={SignInImage} alt="login" />
                    </div>
                </div>
            </div>
        </section >
    )
};

export default SignIn;