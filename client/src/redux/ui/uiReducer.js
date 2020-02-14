import { types } from "./uiTypes";

const INITIAL_STATE = {
  isMenuOpen: false,
  isChangeStatusOpen: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case types.TOGGLE_CHANGE_STATUS_MENU:
      return {
        ...state,
        isChangeStatusOpen: !state.isChangeStatusOpen
      };
    default:
      return state;
  }
};

export default uiReducer;
