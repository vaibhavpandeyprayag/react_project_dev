import { User } from "../modals/User";
import { USERS_FETCH, USERS_FETCH_COMPLETED } from "./actions.constants";

export const usersFetchAction = (query: string) => ({
  type: USERS_FETCH,
  payload: query,
});

export const usersFetchCompletedAction = (users: User[]) => ({
  type: USERS_FETCH_COMPLETED,
  payload: users,
});
