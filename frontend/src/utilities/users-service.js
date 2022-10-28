import * as usersAPI from "./users-api";

export async function signUp(userData) {

  console.log(`signUp hit ${JSON.stringify(userData)}`)

  const response = await usersAPI.signUp(userData);
  const data = response.data;
  localStorage.setItem("data", JSON.stringify(data));

  return response;
}

export const getToken = () => {
  const token =
    JSON.parse(localStorage.getItem("data"))
    && JSON.parse(localStorage.getItem("data"))?.token;
  if (!token) {
    return null;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  // const payload = JSON.parse(Buffer(token.split(".")[1], 'base64'));

  console.log(`token expires: ${new Date(payload.exp * 1000)}`);
  if (payload.exp < Number.parseInt(Date.now() / 1000)) {
    localStorage.removeItem("data");
    return null;
  }

  return token;
};

// set the localStorage for the google user (default exp = 1 hour)
export function setGoogleData(userData, credential) {
  try {
    localStorage.setItem("data", JSON.stringify({
      user: { name: userData.name, email: userData.email },
      token: credential
    }));
  } catch (error) {
    console.log(`setGoogleData error: ${error}`);
  }
}

export async function logIn(userData) {
  try {
    console.log(`userData`);
    const data = await usersAPI.logIn(userData);
    if (data.unauthorized) return 401;
    const { password, id, _id, __v, createdAt, updatedAt, ...user } = data.data.user;
    localStorage.setItem("data", JSON.stringify({ user: user, token: data.data.token }));
    return data;
  } catch (error) {
    console.log(`logIn users-service: ${error}`)
  }
}

export function logOut() {
  localStorage.removeItem('data');
}

export const getUser = () => {
  const token = getToken();
  // alert(JSON.stringify(JSON.parse(localStorage.getItem("data")).user.name))
  // return token ? JSON.parse(localStorage.getItem("data.data.user")) : null;
  return token ? JSON.parse(localStorage.getItem("data")).user : null;
};

export const getUsers = async () => {
  const users = await usersAPI.getUsers()
  return users;
}
