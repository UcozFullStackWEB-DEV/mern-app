import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  PROFILE_FIELDS_ERROR
} from "./types";

const setProfileLoading = () => {
  return { type: PROFILE_LOADING };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

const profileFieldsError = errors => {
  return {
    type: PROFILE_FIELDS_ERROR,
    payload: errors
  };
};

export const createUserProfile = (
  formData,
  history,
  edit = false
) => dispatch => {
  const config = {
    "Content-type": "application/json"
  };

  console.log(formData);
  console.log(history);
  dispatch(setProfileLoading());
  axios
    .post("/api/profile", formData, config)
    .then(res => console.log(res.data))
    .catch(err => dispatch(profileFieldsError(err.response.data)));
};

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/")
    .then(response => {
      dispatch({
        type: GET_PROFILE,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};
