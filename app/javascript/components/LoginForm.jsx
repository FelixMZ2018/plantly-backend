import React from "react";
import { Formik, Field, Form } from "formik";
import { axiosInstance } from "../clients/axiosInstance";

function LoginForm() {
  return (
    <div className="flex flex-col flex_nowrap justify-center h-screen w-screen content-center text-center bg-green-dark">
      <h1>Sturdy Pancake! </h1>
      <Formik
        className="flex flex-col"
        initialValues={{
          username: "",
          passsword: "",
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
        <Form className="flex flex-col justify-center justify-items-center justify-self-auto align-content-center content-center text-center">
          <label htmlFor="Username">Username</label>
          <Field
            className="w-1/5 self-center"
            id="username"
            name="username"
            placeholder="User"
          />

          <label htmlFor="lastName">Password</label>
          <Field
            className="w-1/5 self-center"
            id="password"
            name="password"
            placeholder="Password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <h3>Closed beta for now, but please reach out to me for an invite</h3>
    </div>
  );
}

export default LoginForm;
