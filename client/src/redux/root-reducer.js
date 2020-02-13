import { combineReducers } from "redux";
import uiReducer from "./ui/uiReducer";
import logsReducer from "./logs/logsReducer";

export default combineReducers({
  ui: uiReducer,
  logs: logsReducer
});
