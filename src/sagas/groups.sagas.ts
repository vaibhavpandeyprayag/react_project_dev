import { AnyAction } from "redux";
import {
  takeEvery,
  takeLatest,
  delay,
  debounce,
  call,
  put,
} from "@redux-saga/core/effects";
import {
  GROUPS_QUERY_APPROACH1,
  GROUPS_QUERY_APPROACH2,
  GROUPS_QUERY_APPROACH3,
} from "../actions/actions.constants";
import { fetchGroupsAPI, fetchGroupsAPIApproach3 } from "../api/group";
import {
  QueryCompletedAction,
  QueryCompletedActionApproach3,
} from "../actions/groups.actions";

export function* fetchGroupsApproach1(action: AnyAction): Generator<any> {
  const output: any = yield call(fetchGroupsAPI, {
    query: action.payload.query,
    status: "all-groups",
  });

  yield put(QueryCompletedAction(action.payload.query, output));
}

export function* watchGroupQueryChangedApproach1() {
  console.log("watchGroupQueryChanged called");
  yield debounce(1000, GROUPS_QUERY_APPROACH1, fetchGroupsApproach1);
}

export function* fetchGroupsApproach2(action: AnyAction): Generator<any> {
  const output: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(QueryCompletedAction(action.payload, output));
}

export function* watchGroupQueryChangedApproach2() {
  console.log("watchGroupQueryChanged called");
  yield debounce(1000, GROUPS_QUERY_APPROACH2, fetchGroupsApproach2);
}

export function* fetchGroupsApproach3(action: AnyAction): Generator<any> {
  yield delay(1000);

  const groupResponse: any = yield call(fetchGroupsAPIApproach3, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(
    QueryCompletedActionApproach3(action.payload, groupResponse.data.data)
  );
}

export function* watchGroupQueryChangedApproach3() {
  console.log("watchGroupQueryChanged called");
  yield takeLatest(GROUPS_QUERY_APPROACH3, fetchGroupsApproach3);
}
