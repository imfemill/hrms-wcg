import { useState } from "react";

import { EyeIcon, EyeOffIcon, ArrowRightIcon } from "@heroicons/react/outline";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!!")
    .required("Mail is required!!"),
  password: Yup.string().required("Password Can't be null!"),
});

export default function LoginForm() {
  const nav = useNavigate();
  const [isChecked, setIsChecked] = useState(!1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(!1);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values, { "keep logged in": isChecked });
          setLoading(!loading);
          nav("/");
        }}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  <div className="flex justify-between">
                    <span className="font-semibold tracking-wide text-sm text-wcg_navy">
                      Email Address
                    </span>
                    <span className="text-xs text-red-500">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <input
                    placeholder={"Email"}
                    autoComplete="true"
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`w-full rounded bg-transparent border border-wcg_blue/25 text-sm p-3 focus:ring-transparent focus:outline-none focus:ring-0 focus:border-wcg_blue text-wcg_navy`}
                  />
                </label>
              </div>

              <div className="my-6">
                <div className="relative">
                  <label htmlFor="password">
                    <div className="flex justify-between">
                      <span className="font-semibold tracking-wide text-sm text-wcg_navy/75">
                        Password
                      </span>
                      <span className="text-xs text-red-500">
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                    <input
                      placeholder={"Password"}
                      autoComplete="true"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full rounded bg-transparent border border-wcg_blue/25 text-sm p-3 focus:ring-transparent focus:outline-none focus:ring-0 focus:border-wcg_blue text-wcg_navy/75`}
                    />
                  </label>
                  <span
                    className="absolute right-3 top-1/2 transform cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-wcg_blue hover:text-wcg_navy" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-wcg_blue hover:text-wcg_navy" />
                    )}
                  </span>
                </div>
              </div>

              <div className="select-none mt-8 w-100 gap-2">
                <div className="flex justify-between mb-5 text-xs font-medium text-wcg_navy">
                  <label className="flex cursor-pointer select-none items-center hover:text-wcg_blue">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className="sr-only"
                      />
                      <div
                        className={`box mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-wcg_blue/25`}
                      >
                        <span
                          className={`h-[10px] w-[10px] rounded-full ${
                            isChecked ? "bg-wcg_blue" : "bg-wcg_lightblue"
                          }`}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                    Keep me logged in
                  </label>
                  <div>
                    <span
                      className="self-end cursor-pointer hover:text-wcg_blue"
                      onClick={() => nav("/password/reset")}
                    >
                      Forgot Password?
                    </span>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  onSubmit={() => handleSubmit}
                  className="select-none w-full transform hover:shadow-2xl hover:contrast-125 border-none bg-wcg_blue p-3 text-wcg_lightblue transition duration-300 active:scale-95 rounded-lg"
                >
                  <span>{loading ? "..." : "Sign In"}</span>
                  {/* Add the Heroicon UserOutline component */}
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-5 w-5" />
                  </span>
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
