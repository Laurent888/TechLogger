import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { types } from "../logs/logsTypes";

// ADD LOG
function* addLog() {
  yield takeLatest(types.ADD_LOG_START, addLogAsync);
}

function* addLogAsync(log) {
  const payload = log.payload;
  yield axios
    .post("/api/log", payload)
    .then(() => console.log("Log added"))
    .catch(err => console.log(err));
}

// DELETE LOG

// FETCH ALL THE LOGS
function* fetchLogs() {
  yield console.log("hello from saga");
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
  yield all([fetchLogs(), addLog()]);
}
