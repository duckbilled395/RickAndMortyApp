import React from "react";
import { Form, Formik } from "formik";
import styled from "styled-components";

import { IAuthData } from "shared/store/types/authTypes";
import { checkBoxLabel } from "./lib";
import validate from "./validationSchema";
import { TextField } from "../TextField/TextField";
import { CheckBox } from "../CheckBox/CheckBox";
import { useActions, useAppSelector } from "shared/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { getAuthDataError } from "../../../shared/store/selectors/selectors";

const StyledLoginForm = styled.div`
  width: 400px;
  margin: 50px auto 0 auto;
`;
const styledForm = {
  width: "400px"
};
const StyledButtonSignUp = styled.button`
  width: 400px;
  height: 52px;
  text-decoration: none;
  outline: none;
  margin: 30px 0 0 0;
`;

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
      <StyledLoginForm>
        <Form style={styledForm}>
          <TextField label="Email" name="email" type="text" />
          <TextField label="Password" name="password" type="password" />
          <TextField label="Confirm Password" name="confirmPassword" type="password" />
          <CheckBox label={checkBoxLabel} name="agreements" type="checkbox" />
          <StyledButtonSignUp type="submit">Sign up</StyledButtonSignUp>
        </Form>
        {authDataError && <div>{authDataError}</div>}
      </StyledLoginForm>
    )}
  </Formik>;
};

export default SignUpForm;
