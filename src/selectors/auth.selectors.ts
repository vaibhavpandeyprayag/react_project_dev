import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";
import { usersByIdSelector } from "./users.selectors";

// export const meSelector = (state: AppState) =>
//   state.auth.id === undefined ? undefined : state.users.byId[state.auth.id];

export const meIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
);

export const meSelector = createSelector(
  [meIdSelector, usersByIdSelector],
  (id, usersById) => (id === undefined ? undefined : usersById[id])
);
