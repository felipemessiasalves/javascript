import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import history from "../../../services/history";

function* loginRequest({ payload }) {
  try {
    yield put(actions.loginSuccess());
    toast.success("Você fez login");
    history.push(payload.prevPath);
  } catch {
    toast.error("Deu erro.");
    yield put(actions.loginFailure());
  }
}

function persistRehydrate(payload) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
