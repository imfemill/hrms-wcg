import PasswordResetForm from "../../components/Forms/PasswordResetForm";
import ResetImage from "../../assets/passwordReset.svg"

const SignIn = () => {
    return (
        <section className="bg-[#E4F1FF]">
            <div className="h-screen w-screen bg-opacity-50 flex items-center justify-center">
                <div className="select-none max-lg:m-1 lg:w-2/3 flex shadow-2xl rounded-lg">
                    <div className="lg:w-1/2 py-10 bg-[#fefefe] flex justify-center items-center rounded-l-lg">
                        <div className="my-5 w-4/6">
                            <h1 className="text-3xl flex font-semibold text-wcg_blue">Forgot Password?</h1>

                            <div className="pt-16">
                                <PasswordResetForm />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-wcg_blue flex justify-center items-center p-10 rounded-r-lg">
                        <img src={ResetImage} alt="login" />
                    </div>
                </div>
            </div>
        </section >
    )
};

export default SignIn;