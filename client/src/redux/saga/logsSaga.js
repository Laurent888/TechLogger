import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { types } from "../logs/logsTypes";
import { signInUser } from "./userSaga";

// ADD LOG
function* addLog() {
  yield takeLatest(types.ADD_LOG_START, addLogAsync);
}

function* addLogAsync(log) {
  const payload = log.payload;
  yield axios
    .post("/api/log", payload)
    .then(() => console.log("Log added"))
    .catch(err => console.log(err.response.data));
}

// DELETE LOG

// EDIT LOG
function* editLog() {
  yield takeLatest(types.EDIT_LOG_START, editLogAsync);
}

function* editLogAsync(log) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = log.payload;
  const response = yield axios.put("/api/log", body, config);
  yield console.log(response.data.data);
  yield put({ type: types.EDIT_LOG_SUCCESS, payload: response.data.data });
}

// FETCH ALL THE LOGS
function* fetchLogs() {
  yield takeLatest(types.FETCH_ALL_LOGS_START, fetchLogsAsync);
}

function* fetchLogsAsync() {
  const logs = yield axios
    .get("/api/log")
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));

  yield put({ type: types.FETCH_ALL_LOGS_SUCCESS, payload: logs.data });
}

// ROOT SAGA
export default function* rootSaga() {
  yield all([fetchLogs(), addLog(), editLog(), signInUser()]);
}
