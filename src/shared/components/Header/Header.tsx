import React from "react";

import LoginButtons from "../LoginButtons/LoginButtons";
import { useAppSelector } from "../../hooks/hooks";
import { getAuthData } from "../../store/selectors/selectors";

import "./header.scss";

const Header: React.FC = () => {
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
