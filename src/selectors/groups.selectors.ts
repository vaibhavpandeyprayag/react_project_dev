import { groupStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

const groupLoadingQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupLoadingQuerySelector],
  (query, loadingMap) => loadingMap[query]
);

export const currentQueryGroupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupIdSelector],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
