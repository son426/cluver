import axios from "axios";

export const BASE_URL = `http://34.64.184.11:8000`;

export async function loginValidate(id: string, password: string) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, {
      id: id,
      password: password,
    });
    console.log(response);
    const token = response.data.accessToken;
    localStorage.setItem("token", token);
    return response;
  } catch (e: any) {
    return e.response.data.message;
    console.log(e);
  }
}
export async function getClubs(token: string | null) {
  try {
    const response = await axios.get(`${BASE_URL}/club/my`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e: any) {
    console.log("error: ", e);
    return false;
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
        activity: "정기회합",
      }
    );
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function getCheckCode(month: number, day: number, clubId: number) {
  try {
    const response = await axios.post(`${BASE_URL}/club-attendance`, {
      date: month + "월" + day + "일",
      clubId: clubId,
    });
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function endCheck(month: number, day: number, clubId: number) {
  try {
    const response = await axios.post(`${BASE_URL}/club-attendance/end`, {
      date: month + "월" + day + "일",
      clubId: clubId,
    });
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function createClub(
  name: string,
  desc: string,
  isPrivate: boolean,
  code: string,
  img: string,
  token: string | null
) {
  try {
    const response = await axios.post(
      `${BASE_URL}/club`,
      {
        name: name,
        img: img,
        description: desc,
        is_public: !isPrivate,
        club_code: code,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function deleteClub(id: number, token: string | null) {
  try {
    const response = await axios.delete(`${BASE_URL}/club/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
    return response.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function searchName(name: string) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { name: name },
    });
    return response.data;
  } catch (e: any) {
    console.log("error: ", e);
    return false;
  }
}

export async function codeCheck(
  month: string,
  day: string,
  clubId: number,
  code: string
) {
  try {
    const response = await axios.post(`${BASE_URL}/club-attendance/codecheck`, {
      date: month + "월" + day + "일",
      clubId: clubId,
      code: code,
    });
    return response.data;
  } catch (e: any) {
    console.log(e);
    return e.response.data.message;
  }
}

export async function getClubAttendance(
  month: string,
  day: string,
  clubId: number
) {
  try {
    const response = await axios.post(`${BASE_URL}/club-attendance`, {
      date: month + "월" + day + "일",
      clubId: clubId,
    });
    return response.data;
  } catch (e: any) {
    console.log("error: ", e);
    return false;
  }
}
