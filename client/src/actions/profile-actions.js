import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
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
  dispatch(setProfileLoading());
  axios
    .post("/api/profile", formData, config)
    .then(res => history.push("/dashboard"))
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

// Add & remove experience

export const addExpirience = (formData, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/profile/experience", formData)
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch(profileFieldsError(err.response.data)));
};

export const removeExperience = id => dispatch => {
  dispatch(setProfileLoading());
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res => {
      dispatch(getCurrentProfile());
    })
    .catch(err => dispatch(profileFieldsError(err)));
};

// Add & remove education

export const addEducation = (formData, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/profile/education", formData)
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch(profileFieldsError(err.response.data)));
};

export const removeEducation = id => dispatch => {
  dispatch(setProfileLoading());
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res => {
      dispatch(getCurrentProfile());
    })
    .catch(err => dispatch(profileFieldsError(err)));
};
