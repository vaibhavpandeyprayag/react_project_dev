import { Group } from "../modals/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";
import { bindActionCreators } from "redux";

const QueryAction = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});

const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

export const groupsActions = bindActionCreators(
  {
    query: QueryAction,
    queryCompleted: QueryCompletedAction,
  },
  store.dispatch
);
