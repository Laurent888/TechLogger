import { userTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  uiMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER_SUCCESS:
      return {
        uiMessage: null,
        currentUser: { ...action.payload }
      };
    case userTypes.SET_CURRENT_USER_FAIL:
      return {
        currentUser: null,
        uiMessage: action.payload
      };
    case userTypes.LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
