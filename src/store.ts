import { useReducer } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, Reducer } from "redux";
import { AnyAction, createStore } from "redux";
import { ME_FETCH } from "./actions/auth.actions";
import { Group } from "./modals/Group";
import { User } from "./modals/User";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

// export interface AppState {
//   me?: User;
//   isSideBarOpen: boolean;

//   groupQuery: string;
//   groupQueryMap: { [query: string]: number[] };
//   groups: { [id: number]: Group };
// }

type AppState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  groups: groupReducer,
});

// const reducer: Reducer<AppState> = (
//   state = initialState,
//   action: AnyAction
// ) => {
//   switch (action.type) {
//     case ME_FETCH:
//     case ME_LOGIN:
//       return { ...state, me: action.payload };
//     case GROUPS_QUERY:
//       return { ...state, groupQuery: action.payload };
//     case QUERY_COMPLETED:
//       const groups = action.payload.groups as Group[];
//       const groupIds = groups.map((g) => g.id);
//       const groupMap = groups.reduce((prev, group) => {
//         return { ...prev, [group.id]: group };
//       }, {});
//       return {
//         ...state,
//         groupQueryMap: {
//           ...state.groupQueryMap,
//           [action.payload.query]: groupIds,
//         },
//         groups: { ...state.groups, ...groupMap },
//       };
//     default:
//       return state;
//   }
// };

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //only for development; not for production
);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
