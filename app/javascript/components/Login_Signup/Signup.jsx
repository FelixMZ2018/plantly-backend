import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { axiosInstance } from "../../clients/axiosInstance";
import { useHistory, Link } from "react-router-dom";

function Signup(props) {
  const history = useHistory();

  return (
    <div className="flex flex-col flex_nowrap justify-center content-center text-center items-center w-full bg-green-light">
      <h1>Sturdy Pancake! </h1>
      <Formik
        className="flex flex-col"
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));

          axiosInstance
            .post("user", {
              username: values.username,
              password: values.password,
            })
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                localStorage.setItem("token", response.data.jwt);
                props.handleLogin({
                  user: response.data.user.username,
                  token: response.data.jwt,
                  auth: true,
                });
                history.push("/");
              }
            });

          //        alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col justify-center align-content-center text-center w-1/5">
          <label htmlFor="Username" className="text-green-dark">
            Username
          </label>
          <Field
            className="self-center text-green-dark"
            id="username"
            name="username"
            placeholder="User"
          />

          <label htmlFor="password" className="text-green-dark">
            Password
          </label>
          <Field
            className="self-center text-green-dark"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="password" className="text-green-dark">
            Confirm Password
          </label>
          <Field
            className="self-center text-green-dark"
            id="password"
            name="password"
            placeholder="Password"
          />
          <div>
            <Link to="/login">
              <button
                className="w-1/3 p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer self-start"
                type="submit"
              >
                Login
              </button>
            </Link>
            <button
              className="w-1/3 p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer self-start"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
