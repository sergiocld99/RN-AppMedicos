import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/UserSlice";
import { deleteSession } from "../databases/Local";

// Importación de iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RoundedProfilePic from "./RoundedProfilePic";
import { colors } from "../global/colors";
import { useGetProfilePhotoQuery } from "../services/doctorListService";

const MainHeader = ({ title }) => {
  let { localId, profilePicture } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  // Obtener foto desde Firebase
  let { data: picFromFirebase } = useGetProfilePhotoQuery({localId});

  // Función de cerrar sesión
  const onLogout = () => {
    // Borrar la sesión del store de Redux
    dispatch(logout());

    // Borrar la sesión de la base de datos local
    deleteSession({ localId })
      .then(() => {
        (res) => console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.header}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>{title}</Text>

      {/* Parte derecha */}
      <View style={styles.rightSide}>
        {/* Foto de perfil */}
        <RoundedProfilePic
          picFromFirebase={picFromFirebase}
          pic={profilePicture}
          size={32}
        />

        {/* Ícono para cerrar sesión */}
        <Pressable onPress={onLogout}>
          <MaterialCommunityIcons
            name="power"
            size={32}
            color="black"
            style={{ marginTop: 4 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: colors.headerBackground,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightSide: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
