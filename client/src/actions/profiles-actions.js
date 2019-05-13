import axios from "axios";
import { GET_PROFILES, GET_ERRORS } from "./types";

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
