import axios from "axios";
import { Group } from "../modals/Group";
import { BASE_URL } from "./base";

export interface UserRequest {
  query: string;
}

interface UserResponse {
  data: Group[];
}

export const fetchUsersAPI = (data: UserRequest) => {
  const url = BASE_URL + "/people";
  return axios.get<UserResponse>(url, { params: data });
};
