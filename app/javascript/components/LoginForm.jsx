import React from "react";
import { Formik, Field, Form } from "formik";
import { axiosInstance } from "../clients/axiosInstance";

function LoginForm() {
  return (
    <div className="flex flex-col flex_nowrap justify-center h-screen w-screen content-center text-center items-center">
      <h1>Sturdy Pancake! </h1>
      <Formik
        className="flex flex-col"
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));

          axiosInstance.post("login", {
            username: values.username,
            password: values.password,
          })
          .then(function (response) {
            console.log(response);
          })
        
          //        alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col justify-center align-content-center text-center w-1/5">
          <label htmlFor="Username" className="text-green-dark">Username</label>
          <Field
            className="self-center text-green-dark"
            id="username"
            name="username"
            placeholder="User"
          />

          <label htmlFor="lastName" className="text-green-dark">Password</label>
          <Field
            className="self-center text-green-dark"
            id="password"
            name="password"
            placeholder="Password"
          />
          <div>
          <button className="w-1/3 p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer self-start" type="submit">Sign up</button>
          <button className="w-1/3 p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer self-start" type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <h3>Closed beta for now, but please reach out to me for an invite</h3>
    </div>
  );
}

export default LoginForm;
