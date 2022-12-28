import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, IItem } from "../../types/types";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://new-backend.unistory.app/api/",
  }),
  endpoints: (builder) => ({
    getData: builder.query<IData, void>({
      query: () => "data?page=0&perPage=20",
    }),
    getPersonalInfo: builder.query<IItem, string | undefined>({
      query: (id) => `data/id/${id}`,
    }),
  }),
});

export const { useGetDataQuery, useGetPersonalInfoQuery } = dataApi;
