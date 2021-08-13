import { authActions } from "../actions/auth.actions";
import { meAPI } from "../api/auth";

export const me = () => {
  meAPI().then((u) => authActions.fetch(u));
};
