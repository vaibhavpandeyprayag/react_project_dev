import axios from "axios";

interface loginData {
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

export const login = (data: loginData) => {
  const url = BASE_URL + "/login";
  axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem("login_token", response.data.token);
  });
};
