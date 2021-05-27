import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ margin, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`${margin ? margin : "mb-4"} position-relative`}>
      {props.type === "file" && (
        <button
          className={`btn ${
            meta.touched && meta.error
              ? "btn-outline-danger"
              : "btn-outline-secondary"
          }`}>
          <label htmlFor="image" className="mb-0">
            {meta.value ? meta.value : "Upload Image"}
          </label>
        </button>
      )}
      <input
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        {...field}
      />
      <div className="error">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default TextField;
