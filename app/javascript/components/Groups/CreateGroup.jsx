import React from 'react'

export default function CreateGroup() {
    const history = useHistory();

    const group_id = props.location.state.group_id
        return(
            <div className="flex flex-col flex_nowrap justify-center content-center text-center items-center w-full bg-green-light">
            <Formik
              className="flex flex-col"
              initialValues={{
                name: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                const data =                    {
                    group_id: group_id,
                    name: values.name,
                  }
                const headers = {"Authorization" : `Bearer ${props.jwt}`}
      
                axiosInstance
                  .post("groups/create",data,{headers:headers})
                  .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                      history.push(`/`);
                    }
                  });
      
                //        alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form className="flex flex-col justify-center align-content-center text-center w-1/5">
                <label htmlFor="Username" className="text-green-dark">
                  Group Name
                </label>
                <Field
                  className="self-center text-green-dark"
                  id="name"
                  name="name"
                  placeholder="Plant Name"
                />
                <div>
                  <button
                    className="w-1/3 p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer self-start"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        )
}
