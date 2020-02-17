import { userTypes } from "./userTypes";

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER_START,
  payload: user
});

export const setCurrentUserFromLS = user => ({
  type: userTypes.SET_CURRENT_USER_SUCCESS,
  payload: user
});

export const logoutUser = {
  type: userTypes.LOGOUT_USER
};
