import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import { IAuthData } from "shared/store/types/authTypes";
import { checkBoxLabel } from "./lib";
import validate from "./validationSchema";
import { TextField } from "../TextField/TextField";
import { CheckBox } from "../CheckBox/CheckBox";
import { useActions, useAppSelector } from "shared/store/hooks/hooks";
import { getAuthDataError } from "../../../shared/store/selectors/selectors";

import "./signUpForm.scss";

const SignUpForm: React.FC = () => {

  const navigate = useNavigate();
  const { sendAuthData } = useActions();
  const authDataError = useAppSelector(state => getAuthDataError(state));

  const handleOnSubmit = (values: IAuthData) => {
    sendAuthData(values, navigate);
  };

  return <Formik initialValues={{
    email: "",
    password: "",
    confirmPassword: "",
    agreements: false
  }}
                 validationSchema={validate}
                 onSubmit={(values) => handleOnSubmit(values)}
  >
    {() => (
      <div className='signup'>
        <Form className='signup__form'>
          <TextField label="Email" name="email" type="text" />
          <TextField label="Password" name="password" type="password" />
          <TextField label="Confirm Password" name="confirmPassword" type="password" />
          <CheckBox label={checkBoxLabel} name="agreements" type="checkbox" />
          <button className='signup__btn' type="submit">Sign up</button>
        </Form>
        {authDataError && <div>{authDataError}</div>}
      </div>
    )}
  </Formik>;
};

export default SignUpForm;
