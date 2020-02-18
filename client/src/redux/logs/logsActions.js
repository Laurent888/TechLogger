import { types } from "./logsTypes";

export const fetchAllData = {
  type: types.FETCH_ALL_LOGS_START
};

export const fetchAllUser = {
  type: types.FETCH_ALL_USER_START
};

export const addLog = log => ({
  type: types.ADD_LOG_START,
  payload: log
});

export const setCurrentLog = log => ({
  type: types.SET_CURRENT_LOG,
  payload: log
});

export const editLog = log => ({
  type: types.EDIT_LOG_START,
  payload: log
});

export const filterLogsByStatus = param => ({
  type: types.FILTER_LOGS_BY_STATUS,
  payload: param
});

export const filterLogsByCategory = param => ({
  type: types.FILTER_LOGS_BY_CATEGORY,
  payload: param
});

export const filterLogsByAssignee = param => ({
  type: types.FILTER_LOGS_BY_ASSIGNEE,
  payload: param
});

export const sortLogsByDueDate = {
  type: types.SORT_LOGS_BY_DUEDATE
};
export const sortLogsByStatus = {
  type: types.SORT_LOGS_BY_STATUS
};
export const sortLogsByPriority = {
  type: types.SORT_LOGS_BY_PRIORITY
};
export const sortLogsByAssignee = {
  type: types.SORT_LOGS_BY_ASSIGNEE
};
export const sortLogsByCategory = {
  type: types.SORT_LOGS_BY_CATEGORY
};
