import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { serverApi } from "./serverApi";

const rootReducer = {
  [serverApi.reducerPath]: serverApi.reducer,
};

export const rtkStore = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

setupListeners(rtkStore.dispatch);
