import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ModalBody } from "react-bootstrap";
/// To add later dissallow duplicate Hardware_ID

function validateInput(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

const createGroup = () => (
  <div>
    <h1>Add a new group</h1>
    <Formik
      initialValues={{
        name: "",
        hardware_id: "",
      }}
      onSubmit={async (values) => {
        const postRequest = {
          name: values.name,
          hardware_id: values.hardware_id,
        };
        console.log(postRequest);
        console.log(JSON.stringify(postRequest));
        await axios
          .post("api/v1/groups/create", {
            group: values,
          })
          .then(function (response) {
            console.log(response);
          });
        //         alert(JSON.stringify(values, null, 2));
        //        somehow it still adds root object to the request, its beeing ignored by the api but it should be fixed down the line
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form>
          <label htmlFor="firstName">Group Name: </label>
          <Field
            id="groupname"
            name="name"
            placeholder="Living Room"
            validate={validateInput}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}

          <label htmlFor="lastName">Hardware ID: </label>
          <Field
            id="hardware_id"
            name="hardware_id"
            placeholder="Living_Room_"
            validate={validateInput}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default createGroup;
