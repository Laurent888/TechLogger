import { takeLatest, put } from "redux-saga/effects";
import { userTypes } from "../user/userTypes";
import axios from "axios";

// SIGIN USER

export function* signInUser() {
  yield takeLatest(userTypes.SET_CURRENT_USER_START, signInUserAsync);
}

function* signInUserAsync(user) {
  const payload = yield user.payload;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const userData = yield axios.post("/api/auth", payload, config);
    // SET THE USER INTO LOCAL STORAGE
    yield localStorage.setItem("token", userData.data.token);
    // SET THE CURRENT USER IN REDUX STATE
    console.log(userData.data);
    yield put({
      type: userTypes.SET_CURRENT_USER_SUCCESS,
      payload: userData.data.user
    });
  } catch (err) {
    const errMessage = err.response.data.message;
    yield put({ type: userTypes.SET_CURRENT_USER_FAIL, payload: errMessage });
  }
}
