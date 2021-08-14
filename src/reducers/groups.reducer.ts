import { Reducer } from "redux";
import {
  GROUPS_QUERY_APPROACH1,
  GROUPS_QUERY_APPROACH2,
  GROUPS_QUERY_APPROACH3,
  GROUPS_QUERY_COMPLETED,
  GROUPS_QUERY_COMPLETED_APPROACH3,
} from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loadingQuery?: { [query: string]: boolean }; // For request Approach1 and Approach2
  loadingQueryApproach3?: boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery: {},
  loadingQueryApproach3: false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_APPROACH1:
      return {
        ...state,
        query: action.payload.query,
        loadingQuery: {
          ...state.loadingQuery,
          [action.payload.query]: action.payload.loading,
        },
      };
    case GROUPS_QUERY_APPROACH2:
      return {
        ...state,
        query: action.payload,
        loadingQuery: {
          ...state.loadingQuery,
          [action.payload]: true,
        },
      };
    case GROUPS_QUERY_APPROACH3:
      return {
        ...state,
        query: action.payload,
        loadingQueryApproach3: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIds = getIds(groups);

      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        },
      };
    case GROUPS_QUERY_COMPLETED_APPROACH3:
      const groupsApproach3 = action.payload.groups as Group[];
      const groupIdsApproach3 = getIds(groupsApproach3);

      const newStateApproach3 = addMany(state, groupsApproach3) as GroupState;
      return {
        ...newStateApproach3,
        queryMap: {
          ...newStateApproach3.queryMap,
          [action.payload.query]: groupIdsApproach3,
        },
        loadingQueryApproach3: false,
      };
    default:
      return state;
  }
};
