import { GET_PROFILES } from "../actions/types";
const initialState = {
  loading: true,
  profiles: [],
  singleProfile: {}
};

const ProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default ProfilesReducer;
