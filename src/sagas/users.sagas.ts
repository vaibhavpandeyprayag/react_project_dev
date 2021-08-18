import { AnyAction } from "redux";
import { fetchUsersAPI } from "../api/user";
import { takeEvery, call, put } from "@redux-saga/core/effects";
import { USERS_FETCH } from "../actions/actions.constants";
import { usersFetchCompletedAction } from "../actions/users.actions";

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
