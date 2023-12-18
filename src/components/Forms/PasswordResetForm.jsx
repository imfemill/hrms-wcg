import { useState } from "react";

import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!!")
    .required("Registered mail is required!!"),
});

export default function PasswordResetForm() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          setLoading(!loading);
          nav("/signin");
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
                      Enter Registered Email
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

              <div className="select-none mt-8 w-100 gap-2">
                <button
                  disabled={loading}
                  type="submit"
                  onSubmit={() => handleSubmit}
                  className="select-none uppercase w-full transform hover:shadow-2xl hover:contrast-125 border-none bg-wcg_blue p-3 mb-5 text-wcg_lightblue transition duration-300 active:scale-95 rounded-lg"
                >
                  <span>{loading ? "..." : "Send Password"}</span>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-5 w-5" />
                  </span>
                </button>

                <div className="flex justify-between text-xs font-medium text-wcg_navy">
                  <div>
                    <span
                      className="self-end cursor-pointer hover:text-wcg_blue"
                      onClick={() => nav("/signin")}
                    >
                      I remembered my password
                    </span>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
