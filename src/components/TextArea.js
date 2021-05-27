import React from "react";
import { useField, ErrorMessage } from "formik";

const TextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4 position-relative">
      <textarea
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        {...field}></textarea>
      <div className="error">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default TextArea;
