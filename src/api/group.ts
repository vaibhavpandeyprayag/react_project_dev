import axios from "axios";
import { Group } from "../modals/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroupsAPI = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      console.log(url);
      return response.data.data;
    });
};
