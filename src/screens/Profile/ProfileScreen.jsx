import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SubmitBtn from "../../components/SubmitBtn";
import i18n from "../../translations/i18n";
import { colors } from "../../global/colors";
import RoundedProfilePic from "../../components/RoundedProfilePic";
import { useGetProfilePhotoQuery } from "../../services/doctorListService";

/**
 * Pantalla de perfil de usuario
 */
const ProfileScreen = ({ navigation }) => {
  const { localId, profilePicture: pic } = useSelector(
    (state) => state.auth.value
  );

  // Obtener foto desde Firebase
  const { data: picFromFirebase } = useGetProfilePhotoQuery({localId});

  return (
    <View style={styles.container}>
      {/* Se muestra foto de perfil o una imagen por defecto si aún no existe */}
      <RoundedProfilePic
        picFromFirebase={picFromFirebase}
        pic={pic}
        size={200}
        borderWidth={2}
      />

      {/* Botón para reemplazo de foto */}
      <SubmitBtn
        text={i18n.t("replace_photo")}
        onPress={() => navigation.navigate("PictureSelector")}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    gap: 20,
  },
});
