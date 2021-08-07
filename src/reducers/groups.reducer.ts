import { Reducer } from "redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../actions/groups.actions";
import { Group } from "../modals/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return { ...state, query: action.payload };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        groups: { ...state.byId, ...groupMap },
      };
    default:
      return state;
  }
};
