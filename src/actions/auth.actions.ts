import { User } from "../modals/User";
import { bindActionCreators } from "redux";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";

const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);
