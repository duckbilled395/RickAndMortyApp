import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../shared/store/hooks/hooks";
import { getAuthData } from "../../shared/store/selectors/selectors";
import LoginButtons from "../../shared/components/LoginButtons/LoginButtons";

import "./profile.scss";

const Profile = () => {

  const authData = useAppSelector(state => getAuthData(state))

  if (!authData.email) {return <Navigate to="/login" />}
  return (
    <div className='profile'>
      <div className="profile__item">
        <span className='profile__item_title'>Email: </span>
        {authData.email}
      </div>
      <div className="profile__item">
        <span className='profile__item_title'>Password: </span>
        {authData.password}
      </div>
      <LoginButtons />
    </div>
  );
};

export default Profile;