import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

/// To add later dissallow duplicate Hardware_ID

function validateInput(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

const createPlant = (props) => (
  <div>
    {console.log(props)}
    <h1>Add a new Plant</h1>
    <Formik
      initialValues={{
        name: "",
        group_id: props.group_id,
      }}
      onSubmit={async (values) => {
        const postRequest = {
          name: values.name,
          group_id: values.group_id,
        };
        console.log(postRequest);
        console.log(JSON.stringify(postRequest));
        await axios
          .post("api/v1/plants/create", {
            plant: values,
          })
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              this.props.triggerModal({
                id: null,
                type: "notification",
                action: "success",
                isShown: true,
                group_id: null,
              });
            }
          });
        //         alert(JSON.stringify(values, null, 2));
        //        somehow it still adds root object to the request, its beeing ignored by the api but it should be fixed down the line
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form>
          <label htmlFor="firstName">Plant name: </label>
          <Field
            id="groupname"
            name="name"
            placeholder="Plant Name"
            validate={validateInput}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default createPlant;
