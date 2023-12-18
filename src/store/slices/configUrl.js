import { getAccessToken } from "../../constants/getAccessToken";
import { getBaseUrl } from "../../constants/getBaseUrl";

export const configUrl = (data) => {
  const token = getAccessToken();

  var config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: getBaseUrl,
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
};
