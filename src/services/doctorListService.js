import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { realtimeDatabaseUrl } from "../databases/Remote";

// Etiquetas para invalidar caché
const invalidationTags = {
  ProfilePhotoGet: ["ProfilePhotoGet"],
  AppointmentsGet: ["AppointmentsGet"],
};

// Crear el API para la lista de médicos y especialidades
export const doctorListApi = createApi({
  reducerPath: "doctorListApi",
  baseQuery: fetchBaseQuery({ baseUrl: realtimeDatabaseUrl }),
  tagTypes: ["ProfilePhotoGet", "AppointmentsGet"],
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
      providesTags: invalidationTags.ProfilePhotoGet,
    }),
    updateProfilePhoto: builder.mutation({
      query: ({ localId, image }) => ({
        url: `pfp/${localId}.json`,
        method: "PUT",
        body: {image},
      }),
      invalidatesTags: invalidationTags.ProfilePhotoGet,
    }),

    // Endpoints para obtener, publicar y eliminar turnos
    getAppointmentsOfUser: builder.query({
      query: ( localId ) => `turnos.json?orderBy="userId"&equalTo="${localId}"`,
      providesTags: invalidationTags.AppointmentsGet,
    }),
    postAppointment: builder.mutation({
      query: ({ ...appointment }) => ({
        url: `turnos.json`,
        method: "POST",
        body: appointment,
      }),
      invalidatesTags: invalidationTags.AppointmentsGet,
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `turnos/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: invalidationTags.AppointmentsGet,
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
  useGetAppointmentsOfUserQuery,
  usePostAppointmentMutation,
  useDeleteAppointmentMutation
} = doctorListApi;
