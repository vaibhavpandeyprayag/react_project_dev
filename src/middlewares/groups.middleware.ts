import { groupsActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroupsAPI } from "../api/group";

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  groupsActions.query(query);
  fetchGroupsAPI(request).then((groups) => {
    groupsActions.queryCompleted(query, groups);
  });
};
