import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

const reducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  groups: groupReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //only for development; not for production
);

export type AppState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
