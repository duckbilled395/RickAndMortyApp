import React from "react";
import styled from "styled-components";
import { NavLink, useMatch } from "react-router-dom";

import { colors } from "shared/constants";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useActions, useAppDispatch } from "../../shared/hooks/hooks";
import { setAuthDataError } from "../../shared/store/actions/auth-actions";

const StyledLoginBox = styled.div`
  position: absolute;
  min-width: 700px;
  margin: 50px 50px;
  border-radius: 25px;
  height: 684px;
  background-color: ${colors.border};
`;
const StyledNavLinkContainer = styled.div`
  width: 604px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px auto 0 auto;
`;
const styledNavLink = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "40px",
  fontSize: "18px",
  lineHeight: "26px",
  textDecoration: "none",
  borderBottom: "1px solid",
  borderColor: colors.bg
};
const styledCurrentNavLink = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "40px",
  fontSize: "18px",
  lineHeight: "26px",
  textDecoration: "none",
  borderBottom: "2px solid",
  borderColor: colors.zxc
};

const Login: React.FC = () => {

  const match: string = useMatch("/:path")!.params!.path!;

  const { setAuthDataError } = useActions();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setAuthDataError(""));
  };

  return <StyledLoginBox>
    <StyledNavLinkContainer>
      <NavLink onClick={handleOnClick} style={({ isActive }) => isActive ? styledCurrentNavLink : styledNavLink}
               to="/login">Login</NavLink>
      <NavLink onClick={handleOnClick} style={({ isActive }) => isActive ? styledCurrentNavLink : styledNavLink}
               to="/signUp">Sign up</NavLink>
    </StyledNavLinkContainer>
    {match === "login" ? <LoginForm /> : <SignUpForm />}

  </StyledLoginBox>;
};

export default Login;
