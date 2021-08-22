import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USERS_LIST_RECEIVED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETED,
  USER_FETCH_ONE_ERROR,
} from "../actions/actions.constants";
import { User } from "../modals/User";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initalEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface UserState extends EntityState<User> {
  usersIds: number[];
}

const initialState = {
  ...initalEntityState,
  usersIds: [],
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return addOne(state, action.payload) as UserState;
    case USER_FETCH_ONE:
      return select(state, action.payload) as UserState;
    case USER_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload, false) as UserState;
    case USER_FETCH_ONE_ERROR:
      return setErrorForOne(
        state,
        action.payload.id,
        action.payload.msg
      ) as UserState;
    case USERS_FETCH:
      return { ...state, query: action.payload, loadingList: true };
    case USERS_FETCH_COMPLETED:
      const newState = addMany(state, action.payload);
      const ids = getIds(action.payload);
      return { ...newState, usersIds: ids, loadingList: false };
    case USERS_LIST_RECEIVED:
      return { ...state, byId: { ...state.byId, ...action.payload } };
    default:
      return state;
  }
};
