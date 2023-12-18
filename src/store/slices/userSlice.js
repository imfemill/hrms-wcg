import { serverApi } from "../serverApi";
import { configUrl } from "./configUrl";

export const userSlice = serverApi
  .enhanceEndpoints({ addTagTypes: ["User"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      userLogin: builder.mutation({
        query: (user) => configUrl(user),
      }),
    }),
  });
