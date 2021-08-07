import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";

//export const groupQuerySelector = (state: AppState) => state.groups.query;

export const groupQuerySelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.query;
};

export const groupQueryMapSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.queryMap;
};

export const groupIdSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.byId;
};

// export const currentQueryGroupsSelector = (state: AppState) => {
//   const groupsIds = state.groups.queryMap[state.groups.query] || [];
//   const groups = groupsIds.map((id) => state.groups.byId[id]);
//   return groups;
// };

export const currentQueryGroupsSelector = (state: AppState) => {
  //const query = state.groups.query
  //const groupsIds = state.groups.queryMap[query]
  //const groups = groupsIds.map((id) => state.groups.byId[id]);
  const query = groupQuerySelector(state);
  const queryMap = groupQueryMapSelector(state);
  const byId = groupIdSelector(state);
  const groupsIds = queryMap[query] || [];
  const groups = groupsIds.map((id) => byId[id]);
  return groups;
};
