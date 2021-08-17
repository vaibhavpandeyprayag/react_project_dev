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

export const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const selectedGroupSelector = createSelector(
  [groupIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]
);

export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery!
);

export const groupsLoadingSelector = createSelector(
  [groupQuerySelector, groupQueryLoadingSelector],
  (query, loadingMap) => loadingMap[query]
);

export const groupsLoadingApproach3Selector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQueryApproach3
);

export const currentQueryGroupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupIdSelector],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
