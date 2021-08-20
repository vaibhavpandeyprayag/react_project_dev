import { AnyAction } from "redux";
import { fetchOneUserAPI, fetchUsersAPI } from "../api/user";
import { takeEvery, call, put } from "@redux-saga/core/effects";
import { USERS_FETCH, USER_FETCH_ONE } from "../actions/actions.constants";
import {
  fetchOneUserCompletedAction,
  fetchOneUserErrorAction,
  usersFetchCompletedAction,
} from "../actions/users.actions";

export function* fetchUsers(action: AnyAction): Generator<any> {
  const usersResponse: any = yield call(fetchUsersAPI, {
    query: action.payload,
  });

  yield put(usersFetchCompletedAction(usersResponse.data.data));
}

export function* watchfetchUsers() {
  console.log("fetchUsers called");
  yield takeEvery(USERS_FETCH, fetchUsers);
}

export function* fetchOneUser(action: AnyAction): Generator<any> {
  try {
    const userResponse: any = yield call(fetchOneUserAPI, action.payload);
    yield put(fetchOneUserCompletedAction(userResponse.data.data));
  } catch (Exc) {
    const error = Exc.response.data?.message || "Some error occured";
    yield put(fetchOneUserErrorAction(action.payload, error));
  }
}

export function* watchfetchOneUser() {
  console.log("fetchOneUser called");
  yield takeEvery(USER_FETCH_ONE, fetchOneUser);
}
