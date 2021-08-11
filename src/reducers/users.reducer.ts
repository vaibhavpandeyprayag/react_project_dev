import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { User } from "../modals/User";
import { addOne, EntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {}

const initialState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      // const user: User = action.payload;
      // return { ...state, byId: { ...state.byId, [user.id]: user } };
      return addOne(state, action.payload);
    default:
      return state;
  }
};
