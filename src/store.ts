import { all } from "@redux-saga/core/effects";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";
import { sagaMiddleware } from "./sagas";
import {
  watchFetchOneGroup,
  watchGroupQueryChangedApproach1,
  watchGroupQueryChangedApproach2,
  watchGroupQueryChangedApproach3,
} from "./sagas/groups.sagas";
import { watchfetchOneUser, watchfetchUsers } from "./sagas/users.sagas";

const reducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  groups: groupReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

function* rootSaga() {
  yield all([
    watchGroupQueryChangedApproach1(),
    watchGroupQueryChangedApproach2(),
    watchGroupQueryChangedApproach3(),
    watchFetchOneGroup(),
    watchfetchUsers(),
    watchfetchOneUser(),
  ]);
}

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
