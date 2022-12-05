import { Dispatch } from "redux";

import {
  AuthActionTypes,
  AuthReducerActionTypes,
  IAuthData,
  setAuthDataActionInterface,
  setAuthDataErrorActionInterface
} from "../types/authTypes";
import { authAPI } from "../../api";
import { NavigateFunction } from "react-router-dom";

export const setAuthData = (authData: IAuthData): setAuthDataActionInterface => ({
  type: AuthActionTypes.SET_AUTHDATA,
  payload: authData
});

export const setAuthDataError = (authDataError: string | null | undefined): setAuthDataErrorActionInterface => ({
  type: AuthActionTypes.SET_AUTHDATA_ERROR,
  payload: authDataError
});

export const sendAuthData = (authData: IAuthData, navigate?: NavigateFunction) => {
  return async (dispatch: Dispatch<AuthReducerActionTypes>) => {
    let response = await authAPI.sendAuthData(authData);
    if (response.status === "success") {
      dispatch(setAuthData(authData));
      navigate && navigate("/characters");
      if (authData.email && authData.password && authData.rememberMe) {
        localStorage.setItem('email', authData.email)
        localStorage.setItem('password', authData.password)
      }
    } else {
      dispatch(setAuthDataError(response.body));
    }
  };
};
