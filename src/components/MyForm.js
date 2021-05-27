import React, { useContext } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import { EventContext } from "../context/EventContext";
import TextField from "./TextField";
import TextArea from "./TextArea";

const initialValues = {
  title: "",
  location: "",
  employee: [
    {
      name: "",
    },
  ],
  date: "",
  note: "",
  image: null,
};

const MyForm = () => {
  const router = useHistory();

  const [state, dispatch] = useContext(EventContext);

  const validate = Yup.object({
    title: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    note: Yup.string()
      .required("Required")
      .min(50, "Must be 50 characters or less"),
    image: Yup.mixed().required("A file is required"),
  });

  const submit = (values) => {
    dispatch(values);
    router.push("/");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => {
        submit(values);
      }}>
      {({ values }) => (
        <Form>
          <div className="d-flex justify-content-between">
            <div style={{ width: "45%" }}>
              <TextField type="text" name="title" placeholder="Title" />
              <FieldArray name="employee">
                {({ insert, remove, push }) => (
                  <div>
                    {values.employee.length > 0 &&
                      values.employee.map((data, index) => (
                        <div key={index}>
                          <TextField
                            type="text"
                            name={`employee.${index}.name`}
                            placeholder="Employee"
                            margin="mb-0"
                          />
                          <div className="text-right">
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary mb-3 mt-1"
                              onClick={() => remove(index)}>
                              remove
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary mb-3"
                      onClick={() => push({ name: "" })}>
                      Add Employee
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div style={{ width: "45%" }}>
              <TextField type="text" name="location" placeholder="Location" />
              <TextField type="date" name="date" placeholder="Date" />
            </div>
          </div>
          <div>
            <TextArea rows="5" name="note" />
          </div>
          <div className="mt-3">
            <TextField
              type="file"
              name="image"
              id="image"
              style={{ display: "none" }}
            />
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-secondary">
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
