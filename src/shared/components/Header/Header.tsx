import React, { useEffect } from "react";

import LoginButtons from "../LoginButtons/LoginButtons";
import { useActions, useAppSelector } from "../../store/hooks/hooks";
import { getAuthData } from "../../store/selectors/selectors";

import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const navigate = useNavigate();
  const { sendAuthData } = useActions();

  useEffect(() => {
    sendAuthData({
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
      rememberMe: true,
      error: ''
    }, navigate);
  }, [])

  const email = useAppSelector(state => getAuthData(state)).email;
  return (
    <header className="header">
      <div className="header__content" />
      <div className="header__content">
        {email}
      </div>
      <LoginButtons />
    </header>

  );
};

export default Header;
