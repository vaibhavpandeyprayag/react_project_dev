import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

// export const meSelector = (state: AppState) =>
//   state.auth.id === undefined ? undefined : state.users.byId[state.auth.id];

export const meSelector = createSelector(
  [authStateSelector, userStateSelector],
  (authState, userState) =>
    authState.id === undefined ? undefined : userState.byId[authState.id]
);
