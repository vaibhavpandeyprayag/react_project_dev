import { Group } from "../modals/Group";
import {
  GROUPS_QUERY_APPROACH1,
  GROUPS_QUERY_APPROACH2,
  GROUPS_QUERY_APPROACH3,
  GROUPS_QUERY_COMPLETED,
  GROUPS_QUERY_COMPLETED_APPROACH3,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
} from "./actions.constants";

export const QueryActionApproach1 = (query: string, loading: boolean) => ({
  type: GROUPS_QUERY_APPROACH1,
  payload: { query, loading },
});

export const QueryActionApproach2 = (query: string) => ({
  type: GROUPS_QUERY_APPROACH2,
  payload: query,
});

export const QueryActionApproach3 = (query: string) => ({
  type: GROUPS_QUERY_APPROACH3,
  payload: query,
});

export const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

export const QueryCompletedActionApproach3 = (
  query: string,
  groupsById: { [id: number]: Group }
) => ({
  type: GROUPS_QUERY_COMPLETED_APPROACH3,
  payload: { query, groupsById },
});

export const fetchOneGroupAction = (id: string) => ({
  type: GROUP_FETCH_ONE,
  payload: id,
});

export const fetchOneGroupCompletedAction = (group: Group) => ({
  type: GROUP_FETCH_ONE_COMPLETED,
  payload: group,
});

export const fetchOneGroupErrorAction = (id: number, msg: string) => ({
  type: GROUP_FETCH_ONE_ERROR,
  payload: { id, msg },
});
