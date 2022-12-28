import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./features/api/dataApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(dataApi.middleware),
});
