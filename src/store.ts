import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer } from "redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

const ME_FETCH = "me/fetch";
const GROUPS_FETCH = "groups/fetch";

export interface AppState {
  me?: User;
  groups: Group[];
  isSideBarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  groups: [],
  isSideBarOpen: true,
};

const reducer: Reducer<AppState> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case "me/fetch":
    case "me/login":
      return { ...currentState, me: dispatchedAction.payload };
    case "groups/fetch":
      return { ...currentState, groups: dispatchedAction.payload };
    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //only for development; not for production
);

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const groupsFetchAction = (gs: Group[]) => ({
  type: GROUPS_FETCH,
  payload: gs,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
