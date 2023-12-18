export const getAccessToken = () =>
  localStorage.getItem("Authorization") || "this is access token";
