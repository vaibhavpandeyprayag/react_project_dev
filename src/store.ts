import { Reducer } from "redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

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
    default:
      return currentState;
  }
};

export const store = createStore(reducer);
