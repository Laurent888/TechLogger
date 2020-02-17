import { userTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER_SUCCESS:
      return {
        errorMessage: null,
        currentUser: { ...action.payload }
      };
    case userTypes.SET_CURRENT_USER_FAIL:
      return {
        currentUser: null,
        errorMessage: action.payload
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
