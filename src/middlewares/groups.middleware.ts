import axios, { Canceler } from "axios";
import { groupsActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroupsAPI } from "../api/group";
import {
  groupQueryLoadingSelector,
  groupQueryMapSelector,
} from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroupsApproach1 = (request: GroupRequest) => {
  const query = request.query;
  const queryMap = groupQueryMapSelector(store.getState());
  const groupIds = queryMap[query];
  groupsActions.queryApproach1(query, !groupIds);

  if (groupIds) return;

  fetchGroupsAPI(request).then((groups) => {
    groupsActions.queryCompleted(query, groups);
  });
};

export const fetchGroupsApproach2 = (request: GroupRequest) => {
  const query = request.query;
  const queryLoading = groupQueryLoadingSelector(store.getState());
  const loading = queryLoading[query];
  groupsActions.queryApproach2(query);

  if (loading) return;

  fetchGroupsAPI(request).then((groups) => {
    groupsActions.queryCompleted(query, groups);
  });
};

let canceler: Canceler | undefined;

export const fetchGroupsApproach3 = (request: GroupRequest) => {
  const query = request.query;

  canceler && canceler();

  groupsActions.queryApproach3(query);

  const { token, cancel } = axios.CancelToken.source(); // gives token and corresponding cancelation function
  canceler = cancel;

  fetchGroupsAPI(request, token).then((groups) => {
    groupsActions.queryCompletedApproach3(query, groups);
    canceler = undefined;
  });
};
