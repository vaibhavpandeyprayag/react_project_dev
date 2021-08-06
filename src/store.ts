import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer } from "redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me?fetch";
export const GROUPS_QUERY = "groups/query";
export const QUERY_COMPLETED = "groups/query_completed";

export interface AppState {
  me?: User;
  isSideBarOpen: boolean;

  groupQuery: string;
  groupQueryMap: { [query: string]: number[] };
  groups: { [id: number]: Group };
}

const initialState: AppState = {
  me: undefined,
  isSideBarOpen: true,

  groupQuery: "",
  groupQueryMap: {},
  groups: [],
};

const reducer: Reducer<AppState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };
    case GROUPS_QUERY:
      return { ...state, groupQuery: action.payload };
    case QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        groupQueryMap: {
          ...state.groupQueryMap,
          [action.payload.query]: groupIds,
        },
        groups: { ...state.groups, ...groupMap },
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //only for development; not for production
);

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
