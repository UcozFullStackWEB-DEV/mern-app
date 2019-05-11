import {
  USER_REGISTER_FAILURE,
  USER_LOGIN_ERRORS,
  PROFILE_FIELDS_ERROR
} from "../actions/types";
const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_FAILURE:
      //return object with errors
      return action.payload;
    case USER_LOGIN_ERRORS:
      return action.payload;
    case PROFILE_FIELDS_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
