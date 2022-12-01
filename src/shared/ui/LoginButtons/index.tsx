import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../constants";
import { useActions, useAppSelector } from "../../hooks/hooks";
import { getAuthData } from "../../store/selectors/selectors";

const StyledLoginMenu = styled.div`
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const styledLogin = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  width: "100px",
  height: "40px",
  backgroundColor: colors.white,
  border: "3px solid ",
  borderColor: colors.border,
  borderRadius: "8px",
  fontSize: "20px",
  lineHeight: "20px",
  color: colors.text
};

const LoginButtons: React.FC = () => {

  const { setAuthDataError, setAuthData } = useActions();

  const handleOnClick = () => {
    setAuthDataError("");
  };
  const handleOnClickLogOut = () => {
    setAuthData({
      email: '',
      password: '',
      rememberMe: false,
    })
  }
  const authData = useAppSelector(state => getAuthData(state));

  return (
    <>
      {authData.email
        ? <NavLink style={styledLogin} onClick={handleOnClickLogOut} to="/login">Log out</NavLink>
        : <StyledLoginMenu>
          <NavLink style={styledLogin} onClick={handleOnClick} to="/login">Login</NavLink>
          <NavLink style={styledLogin} onClick={handleOnClick} to="/signUp">Sign up</NavLink>
        </StyledLoginMenu>
      }
    </>
  );
};

export default LoginButtons;
