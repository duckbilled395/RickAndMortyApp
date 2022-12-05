import React, { FC } from "react";
import { ErrorMessage, Field, useField } from "formik";

import "./checkBox.scss";

type PropsType = {
  label: string,
  name: string,
  type: string
}

export const CheckBox: FC<PropsType> = ({ label, name, type }) => {
  const [field, meta] = useField({ name, type });

  return (
    <>
      <div className="checkbox__textField">
        <div className="checkbox__outerField">
          <Field className="checkbox__field" {...field} name={name} type={type} autoComplete="off" />
        </div>
        <label className="checkbox__label" htmlFor={field.name}>{label}</label>
      </div>
      <div className="checkbox__label">
        <ErrorMessage name={field.name} />
      </div>
    </>
  );
};
