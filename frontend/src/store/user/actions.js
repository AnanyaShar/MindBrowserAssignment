import {
    SET_PROFILE,
  } from './types';
  
  // Action for setting profile data of user
  export function setProfile(profile) {
    return {
      type: SET_PROFILE,
      payload: profile,
    };
  }
  