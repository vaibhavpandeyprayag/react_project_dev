import { User } from "../modals/User";
import {
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETED,
  USER_FETCH_ONE_ERROR,
  USERS_LIST_RECEIVED,
} from "./actions.constants";

export const usersFetchAction = (query: string) => ({
  type: USERS_FETCH,
  payload: query,
});

export const usersFetchCompletedAction = (users: User[]) => ({
  type: USERS_FETCH_COMPLETED,
  payload: users,
});

export const usersListReceived = (usersById: { [id: number]: User }) => ({
  type: USERS_LIST_RECEIVED,
  payload: usersById,
});

export const fetchOneUserAction = (id: string) => ({
  type: USER_FETCH_ONE,
  payload: id,
});

export const fetchOneUserCompletedAction = (user: User) => ({
  type: USER_FETCH_ONE_COMPLETED,
  payload: user,
});

export const fetchOneUserErrorAction = (id: number, msg: string) => ({
  type: USER_FETCH_ONE_ERROR,
  payload: { id, msg },
});
