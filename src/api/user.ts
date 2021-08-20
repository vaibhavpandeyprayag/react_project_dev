import axios from "axios";
import { User } from "../modals/User";
import { BASE_URL } from "./base";

export interface UserRequest {
  query: string;
}

interface UserResponse {
  data: User[];
}

export const fetchUsersAPI = (data: UserRequest) => {
  const url = BASE_URL + "/people";
  return axios.get<UserResponse>(url, { params: data });
};

export const fetchOneUserAPI = (id: number) => {
  const url = BASE_URL + "/people/" + id;
  return axios.get<UserResponse>(url);
};
