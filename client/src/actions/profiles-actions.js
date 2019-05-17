import axios from "axios";
import {
  GET_PROFILES,
  GET_ERRORS,
  GET_SINGLE_USER,
  CLEAR_SINGLE_USER
} from "./types";

export const get_profiles = () => dispatch => {
  axios
    .get("/api/profile/all")
    .then(res => {
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
        loading: false
      });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const get_single_profile = id => dispatch => {
  axios
    .get(`/api/profile/user/${id}`)
    .then(user => {
      dispatch({
        type: GET_SINGLE_USER,
        payload: user.data
      });
    })
    .catch(err => console.log(err));
};

export const clear_single_profile = () => {
  return {
    type: CLEAR_SINGLE_USER
  };
};
