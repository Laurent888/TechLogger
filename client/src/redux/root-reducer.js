import { combineReducers } from "redux";
import uiReducer from "./ui/uiReducer";
import logsReducer from "./logs/logsReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  ui: uiReducer,
  logs: logsReducer,
  user: userReducer
});
