import axios from "axios";

interface loginData {
  email: string;
  password: string;
}

const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data: loginData) => {
  const url = BASE_URL + "/login";
  axios.post(url, data).then((response) => console.log(response));
};
