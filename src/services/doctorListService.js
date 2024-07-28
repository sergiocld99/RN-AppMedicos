import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { realtimeDatabaseUrl } from "../databases/Remote";

// Crear el API para la lista de médicos y especialidades
export const doctorListApi = createApi({
  reducerPath: "doctorListApi",
  baseQuery: fetchBaseQuery({ baseUrl: realtimeDatabaseUrl }),
  endpoints: (builder) => ({
    // Endpoints para obtener médicos y especialidades
    getSpecialties: builder.query({
      query: () => "especialidades.json",
    }),
    getDoctorsBySpecialty: builder.query({
      query: (specialty) =>
        `medicos.json?orderBy="especialidad"&equalTo="${specialty}"`,
      transformResponse: (response) => Object.values(response),
    }),
    getDoctorById: builder.query({
      query: (id) => `medicos.json?orderBy="id"&equalTo=${id}`,
      transformResponse: (response) => Object.values(response)[0],
    }),

    // Endpoints para obtener y actualizar fotos de perfil
    getProfilePhoto: builder.query({
      query: ({localId}) => `pfp/${localId}.json`,
    }),
    updateProfilePhoto: builder.mutation({
      query: ({ localId, image }) => ({
        url: `pfp/${localId}.json`,
        method: "PUT",
        body: {image},
      }),
    }),

    // Endpoints para obtener y publicar turnos
    getAppointments: builder.query({
      query: ({ localId }) => `turnos/${localId}.json`,
    }),
    postAppointment: builder.mutation({
      query: ({ localId, appointment }) => ({
        url: `turnos/${localId}.json`,
        method: "POST",
        body: { appointment },
      }),
    }),
  }),
});

// Exportar los hooks para usar el API
export const {
  useGetSpecialtiesQuery,
  useGetDoctorsBySpecialtyQuery,
  useGetDoctorByIdQuery,
  useGetProfilePhotoQuery,
  useUpdateProfilePhotoMutation,
  useGetAppointmentsQuery,
  usePostAppointmentMutation,
} = doctorListApi;
