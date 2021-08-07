import { Group } from "../modals/Group";

export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/query_completed";

export const groupsQueryAction = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});

export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
  tpye: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});
