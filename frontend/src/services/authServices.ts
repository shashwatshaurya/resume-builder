const BE_BASE_URL = process.env.BE_BASE_URL;
const serviceEndpoints = {
  login: "/auth/login",
  logout: "/auth/logout",
  fetchUserSession: "/auth/session",
  register: "/auth/register"
};

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${BE_BASE_URL}${serviceEndpoints.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();
    sessionStorage.setItem("session", JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const logout = async () => {
  try {
    await fetch(`${BE_BASE_URL}${serviceEndpoints.logout}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    sessionStorage.removeItem("session");
  } catch (error) {
    console.log(error);
  }
};

export const register = async () => {};

export const fetchUserDetails = async () => {
  try {
    const sessionValue = sessionStorage.getItem("session");
    if (sessionValue) {
      const userData = await fetch(
        `${BE_BASE_URL}${serviceEndpoints.fetchUserSession}?sessionId=${sessionValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
};
