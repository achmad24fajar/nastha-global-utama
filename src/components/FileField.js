import React, { useState, useEffect } from "react";
import { ErrorMessage, useField } from "formik";

const FileField = ({ ...props }) => {
  const [field, meta] = useField(props);

  //   const getImage = (event) => {
  //     if (event.target.files) {
  //       setValue(event.target.files[0] || event.dataTransfer.files[0]);
  //     }
  //   };

  return (
    <div>
      <button className="btn btn-outline-secondary">
        <label htmlFor="image" className="mb-0">
          {meta.value ? "Selected" : "Upload Image"}
        </label>
      </button>
      <input className={`d-none`} {...props} {...field} type="file" />
    </div>
  );
};

export default FileField;
