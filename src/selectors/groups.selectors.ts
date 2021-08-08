import { groupStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

// export const groupQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.query;
// };

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

// const groupQueryMapSelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.queryMap;
// };

const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

// const groupIdSelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.byId;
// };

const groupIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

// export const currentQueryGroupsSelector = (state: AppState) => {
//   //const query = state.groups.query
//   //const groupsIds = state.groups.queryMap[query]
//   //const groups = groupsIds.map((id) => state.groups.byId[id]);
//   const query = groupQuerySelector(state);
//   const queryMap = groupQueryMapSelector(state);
//   const byId = groupIdSelector(state);
//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);
//   return groups;
// };

export const currentQueryGroupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupIdSelector],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
