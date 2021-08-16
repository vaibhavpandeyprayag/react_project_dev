import axios, { CancelToken } from "axios";
import { Group } from "../modals/Group";
import { BASE_URL, get } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroupsAPI = (data: GroupRequest, token?: CancelToken) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<GroupResponse>(url, { params: data, cancelToken: token })
    .then((response) => {
      console.log(url);
      return response.data.data;
    });
};

export const fetchGroupsAPIApproach3 = (
  data: GroupRequest,
  token?: CancelToken
) => {
  const url = BASE_URL + "/groups";
  return get<GroupResponse>(url, { params: data, cancelToken: token });
};
