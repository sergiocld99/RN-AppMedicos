import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { realtimeDatabaseUrl } from "../databases/Remote";

// Crear el API para la lista de médicos y especialidades
export const doctorListApi = createApi({
  reducerPath: "doctorListApi",
  baseQuery: fetchBaseQuery({ baseUrl: realtimeDatabaseUrl }),
  endpoints: (builder) => ({
    getSpecialties: builder.query({
      query: () => "especialidades.json",
    }),
    getDoctorsBySpecialty: builder.query({
      query: (specialty) =>
        `medicos.json?orderBy="especialidad"&equalTo="${specialty}"`,
    }),
    getDoctorById: builder.query({
      query: (id) => `medicos.json?orderBy="id"&equalTo=${id}`,
    }),
  }),
});

// Exportar los hooks para usar el API
export const {
  useGetSpecialtiesQuery,
  useGetDoctorsBySpecialtyQuery,
  useGetDoctorByIdQuery,
} = doctorListApi;
