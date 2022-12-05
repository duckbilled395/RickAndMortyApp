import React from "react";
import { NavLink } from "react-router-dom";

import { useActions, useAppSelector } from "../../store/hooks/hooks";
import { getAuthData } from "../../store/selectors/selectors";

import "./loginButtons.scss";

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
    localStorage.clear()
  }

  const authData = useAppSelector(state => getAuthData(state));

  return (
    <>
      {authData.email
        ? <NavLink className='login__link' onClick={handleOnClickLogOut} to="/login">Log out</NavLink>
        : <div className='login__menu'>
          <NavLink className='login__link' onClick={handleOnClick} to="/login">Login</NavLink>
          <NavLink className='login__link' onClick={handleOnClick} to="/signUp">Sign up</NavLink>
        </div>
      }
    </>
  );
};

export default LoginButtons;
