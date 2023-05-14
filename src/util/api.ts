import axios from "axios";

const BASE_URL = `http://172.20.10.4:8000`;

export async function loginValidate(id: string, password: string) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, {
      id: id,
      password: password,
    });
    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    return response;
  } catch (e: any) {
    return e.response.data.message;
  }
}
export async function tokenValidate(token: string | null) {
  try {
    const response = await axios.get(`${BASE_URL}/auth/check`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e: any) {
    console.log("error: ", e);
    return false;
  }
}
