import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

const usersByIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
);

const usersIdsSelector = createSelector(
  [userStateSelector],
  (userState) => userState.usersIds
);

export const usersLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingList
);

export const usersQuerySelector = createSelector(
  [userStateSelector],
  (userState) => userState.query
);

export const selectedUserErrorSelector = createSelector(
  [userStateSelector],
  (userState) => userState.errorOne
);

export const selectedIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.selectedId
);

export const selectedUserSelector = createSelector(
  [usersByIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]
);
export const selectedUserLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingOne
);

export const usersSelector = createSelector(
  [usersByIdSelector, usersIdsSelector],
  (byId, ids) => {
    const users = ids.map((id) => byId[id]);
    return users;
  }
);
