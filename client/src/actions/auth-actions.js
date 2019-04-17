import axios from "axios";
import { USER_REGISTER_SUCCES, USER_REGISTER_FAILURE } from "./types";

const user_register = user => {
  return {
    type: USER_REGISTER_SUCCES,
    payload: user
  };
};

const get_errors = errors => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: errors
  };
};

export const userRegister = (userInfo, history) => dispatch => {
  axios
    .post("/api/users/register", userInfo)
    .then(user => dispatch(user_register(user.data)))
    .catch(err => dispatch(get_errors(err.response.data), history));
};
