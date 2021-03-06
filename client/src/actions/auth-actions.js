import axios from "axios";
import {
  USER_REGISTER_FAILURE,
  SET_CURRENT_USER,
  USER_LOG_OUT,
  USER_LOGIN_ERRORS
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import parseJwt from "../utils/parseJWT";

const get_register_errors = errors => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: errors
  };
};

const get_login_errors = errors => {
  return {
    type: USER_LOGIN_ERRORS,
    payload: errors
  };
};

export const userRegister = (userInfo, history) => dispatch => {
  axios
    .post("/api/users/register", userInfo)
    .then(user => history.push("/login"))
    .catch(err => dispatch(get_register_errors(err.response.data)));
};

export const userLogin = userInfo => dispatch => {
  axios
    .post("/api/users/login", userInfo)
    .then(res => {
      const { token } = res.data;
      const decodedUser = parseJwt(token);
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setCurrentUser(decodedUser));
    })
    .catch(err => {
      console.log(err);
      return dispatch(get_login_errors(err.response.data));
    });
};

export const setCurrentUser = decodedUser => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser
  };
};

export const logOutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  //Remove headers from axios
  setAuthToken(null);
  dispatch({ type: USER_LOG_OUT });
  if (history) {
    history.push("/");
  } else {
    window.location.replace("/");
  }
};
