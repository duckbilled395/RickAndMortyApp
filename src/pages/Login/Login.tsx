import React from "react";
import { NavLink, useMatch } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useActions, useAppDispatch } from "../../shared/store/hooks/hooks";

import "./login.scss";

const styledNavLink = {
  borderBottom: "1px solid",
  borderColor: '#66a5AD'
};
const styledCurrentNavLink = {
  borderBottom: "2px solid",
  borderColor: '#003b46'
};

const Login: React.FC = () => {

  const match: string = useMatch("/:path")!.params!.path!;

  const { setAuthDataError } = useActions();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setAuthDataError(""));
  };

  return (
    <div className='login__box'>
      <div className='navLink__container'>
        <NavLink onClick={handleOnClick} className='navLink' style={({ isActive }) => isActive ? styledCurrentNavLink : styledNavLink}
                 to="/login">Login</NavLink>
        <NavLink onClick={handleOnClick} className='navLink' style={({ isActive }) => isActive ? styledCurrentNavLink : styledNavLink}
                 to="/signUp">Sign up</NavLink>
      </div>
      {match === "login" ? <LoginForm /> : <SignUpForm />}

    </div>
  );
};

export default Login;
