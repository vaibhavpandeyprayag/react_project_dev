import axios from "axios";
import { User } from "../modals/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

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

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem("login_token", response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
};
