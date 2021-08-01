import axios from "axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: "staff" | "admin";
}

const BASE_URL = "https://api-dev.domecompass.com";
const LS_LOGIN_TOKEN = "login_token";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem("login_token", response.data.token);
    return response.data.user;
  });
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  axios
    .get(url, { params: data, headers: { Authorization: token } })
    .then((response) => console.log(response))
    .catch((e) => console.error(e));
};
