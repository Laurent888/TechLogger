import { types } from "./logsTypes";

const INITIAL_STATE = {
  allLogs: []
};

const logsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ALL_LOGS_SUCCESS:
      return {
        ...state,
        allLogs: [...action.payload]
      };
    default:
      return state;
  }
};

export default logsReducer;
