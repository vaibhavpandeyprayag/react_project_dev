import { User } from "../modals/User";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });

// export const authActions = bindActionCreators(
//   {
//     fetch: meFetchAction,
//     login: meLoginAction,
//   },
//   store.dispatch
// );
