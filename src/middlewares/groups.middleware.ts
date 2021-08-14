import { groupsActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroupsAPI } from "../api/group";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  const groupMap = groupQueryMapSelector(store.getState());
  const groupIds = groupMap[query];
  groupsActions.query(query, !groupIds);

  if (groupIds) return;

  fetchGroupsAPI(request).then((groups) => {
    groupsActions.queryCompleted(query, groups);
  });
};
