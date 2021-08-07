import { AppState } from "../store";

export const meSelector = (state: AppState) =>
  state.auth.id === undefined ? undefined : state.users.byId[state.auth.id];
