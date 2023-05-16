import axios from "axios";

export const BASE_URL = `http://34.64.184.11:8000`;

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
    console.log(e);
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

export async function createCheckCode(
  month: number,
  day: number,
  clubId: number
) {
  try {
    const response = await axios.post(
      `${BASE_URL}/club-attendance/startcheck`,
      {
        date: month + "월" + day + "일",
        clubId: clubId,
      }
    );
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function doCheck(
  month: string,
  day: string,
  clubId: number,
  username: string,
  usercode: string
) {
  try {
    const response = await axios.post(`${BASE_URL}/club-attendance/docheck`, {
      date: month + "월" + day + "일",
      clubId: clubId,
      username: username,
      usercode: usercode,
    });
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}
