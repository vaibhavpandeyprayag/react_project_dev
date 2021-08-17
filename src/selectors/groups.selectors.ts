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

export const queryIdsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector],
  (query, queryMap) => queryMap[query] || []
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const selectedGroupErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne
);

export const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const selectedGroupSelector = createSelector(
  [groupByIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]
);

export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery!
);

export const selectedGroupLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);

export const groupsLoadingSelector = createSelector(
  [groupQuerySelector, groupQueryLoadingSelector],
  (query, loadingMap) => loadingMap[query]
);

export const groupsLoadingApproach3Selector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

export const currentQueryGroupsSelector = createSelector(
  [queryIdsSelector, groupByIdSelector],
  (groupsIds, byId) => {
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
