import { types } from "./logsTypes";

export const fetchAllData = {
  type: types.FETCH_ALL_LOGS_START
};

export const addLog = log => ({
  type: types.ADD_LOG_START,
  payload: log
});
