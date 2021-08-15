import { Group } from "../modals/Group";
import {
  GROUPS_QUERY_APPROACH1,
  GROUPS_QUERY_APPROACH2,
  GROUPS_QUERY_APPROACH3,
  GROUPS_QUERY_COMPLETED,
  GROUPS_QUERY_COMPLETED_APPROACH3,
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
  groups: Group[]
) => ({
  type: GROUPS_QUERY_COMPLETED_APPROACH3,
  payload: { query, groups },
});
