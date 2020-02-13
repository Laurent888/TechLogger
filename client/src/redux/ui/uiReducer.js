import { types } from "./uiTypes";

const INITIAL_STATE = {
  isMenuOpen: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};

export default uiReducer;
