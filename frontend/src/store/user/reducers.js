import {
  SET_PROFILE,
} from './types';

// Initial State for the user reducer
const initialState = {
  profile: [],
};

// Reducer Action mapping for user reducer
export function userReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
