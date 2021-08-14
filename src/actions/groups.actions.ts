import { Group } from "../modals/Group";
import { store } from "../store";
import {
  GROUPS_QUERY_APPROACH1,
  GROUPS_QUERY_APPROACH2,
  GROUPS_QUERY_COMPLETED,
} from "./actions.constants";
import { bindActionCreators } from "redux";

const QueryActionApproach1 = (query: string, loading: boolean) => ({
  type: GROUPS_QUERY_APPROACH1,
  payload: { query, loading },
});

const QueryActionApproach2 = (query: string) => ({
  type: GROUPS_QUERY_APPROACH2,
  payload: query,
});

const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

export const groupsActions = bindActionCreators(
  {
    queryApproach1: QueryActionApproach1,
    queryApproach2: QueryActionApproach2,
    queryCompleted: QueryCompletedAction,
  },
  store.dispatch
);
