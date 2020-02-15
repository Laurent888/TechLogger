import { types } from "./logsTypes";

export const fetchAllData = {
  type: types.FETCH_ALL_LOGS_START
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
