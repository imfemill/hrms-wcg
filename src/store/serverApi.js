import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../constants/getBaseUrl";

export const serverApi = createApi({
  reducerPath: "serverApi",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl,
  }),
  endpoints: () => {},
});
