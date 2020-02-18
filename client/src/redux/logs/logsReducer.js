import { types } from "./logsTypes";
import {
  filterLogsByStatus,
  filterLogsByCategory,
  filterLogsByAssignee
} from "./logsUtils";

const INITIAL_STATE = {
  allLogs: [],
  filteredLogs: [],
  currentLog: {},
  allUsers: []
};

const logsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ALL_LOGS_SUCCESS:
      return {
        ...state,
        allLogs: [...action.payload],
        filteredLogs: [...action.payload]
      };
    case types.SET_CURRENT_LOG:
      return {
        ...state,
        currentLog: { ...action.payload }
      };
    case types.EDIT_LOG_SUCCESS:
      return {
        ...state,
        currentLog: { ...action.payload },
        allLogs: state.allLogs.map(item =>
          item._id === action.payload._id ? action.payload : item
        )
      };
    case types.FETCH_ALL_USER_SUCCESS:
      return {
        ...state,
        allUsers: [...action.payload]
      };
    case types.FILTER_LOGS_BY_STATUS:
      return {
        ...state,
        filteredLogs: [...filterLogsByStatus(state.allLogs, action.payload)]
      };
    case types.FILTER_LOGS_BY_CATEGORY:
      return {
        ...state,
        filteredLogs: [
          ...filterLogsByCategory(state.filteredLogs, action.payload)
        ]
      };
    case types.FILTER_LOGS_BY_ASSIGNEE:
      return {
        ...state,
        filteredLogs: [
          ...filterLogsByAssignee(state.filteredLogs, action.payload)
        ]
      };
    default:
      return state;
  }
};

export default logsReducer;
