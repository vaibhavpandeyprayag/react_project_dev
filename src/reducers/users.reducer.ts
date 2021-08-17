import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { User } from "../modals/User";
import { addOne, EntityState, initalEntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {}

const initialState = {
  ...initalEntityState,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return addOne(state, action.payload) as UserState;
    default:
      return state;
  }
};
