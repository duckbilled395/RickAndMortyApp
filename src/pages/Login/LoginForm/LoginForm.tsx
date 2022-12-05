import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { useActions, useAppSelector } from "shared/store/hooks/hooks";
import { IAuthData } from "../../../shared/store/types/authTypes";
import { CheckBox } from "../CheckBox/CheckBox";
import { TextField } from "../TextField/TextField";
import validate from "./validationSchema";
import { getAuthDataError } from "../../../shared/store/selectors/selectors";

import "./loginForm.scss";

const LoginForm: React.FC = () => {

  const navigate = useNavigate();
  const { sendAuthData } = useActions();
  const authDataError = useAppSelector(state => getAuthDataError(state));

  const handleOnSubmit = (values: IAuthData) => {
    sendAuthData(values, navigate);
  };

  useEffect(() => {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      sendAuthData({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        rememberMe: true,
        error: ''
      }, navigate);
    }
  }, [])

  return (
    <Formik initialValues={{
      email: "",
      password: "",
      rememberMe: false
    }} validationSchema={validate}
            onSubmit={(values) => handleOnSubmit(values)}
            validateOnChange={false}
    >
      {() => (
        <div className='login'>
          <Form className='login__form'>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Password" name="password" type="password" />
            <CheckBox label="Remember Me" name="rememberMe" type="checkbox" />
            <button className='login__btn' type="submit">Login</button>
          </Form>
          {authDataError && <div>{authDataError}</div>}
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
