export const getAuthToken = () => {
  return localStorage.getItem("session");
};
