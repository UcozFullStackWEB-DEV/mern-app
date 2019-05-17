import {
  GET_PROFILES,
  GET_SINGLE_USER,
  CLEAR_SINGLE_USER
} from "../actions/types";
const initialState = {
  loading: true,
  profiles: [],
  singleProfile: {
    loading: true,
    profile: {}
  }
};

const ProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        singleProfile: {
          profile: action.payload,
          loading: false
        }
      };
    case CLEAR_SINGLE_USER:
      return {
        ...state,
        singleProfile: {
          profile: {},
          loading: true
        }
      };
    default:
      return state;
  }
};

export default ProfilesReducer;
