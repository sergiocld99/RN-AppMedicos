import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importar expo-image-picker
import * as ImagePicker from "expo-image-picker";

import RoundedProfilePic from "../../components/RoundedProfilePic";
import { colors } from "../../global/colors";
import SubmitBtn from "../../components/SubmitBtn";
import i18n from "../../translations/i18n";
import { useUpdateProfilePhotoMutation } from "../../services/doctorListService";
import { setProfilePicture } from "../../features/UserSlice";

const PictureSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId, profilePicture } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  // Hook para actualizar foto de perfil en Firebase
  const [triggerUpdatePhoto, mutationResult] = useUpdateProfilePhotoMutation();

  // Verificación de permisos
  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    return granted;
  };

  // Elección de imagen
  const pickPicture = async () => {
    const permissionGranted = await verifyPermissions();
    if (!permissionGranted) {
      // Regresar a la pantalla anterior
      navigation.goBack();
      return;
    }

    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      quality: 0.2,
    })
      .then((selection) => {
        if (!selection.canceled) {
          // Transformar de base 64 a JPEG
          setImage(`data:image/jpeg;base64,${selection.assets[0].base64}`);
        }
      })
      .catch((err) => {
        // Regresar a la pantalla anterior
        // Puede ocurrir por permiso denegado
        console.log(err);
        navigation.goBack();
      });
  };

  // Confirmación de imagen
  const confirmPicture = () => {
    // Actualizar foto de perfil en Firebase
    triggerUpdatePhoto({ localId, image });

    // Actualizar foto de perfil en el store de Redux
    dispatch(setProfilePicture(image));
  };

  // Descarte de imagen
  const onDiscard = () => {
    // Descartar imagen seleccionada
    setImage(null);

    // Regresar a la pantalla anterior
    navigation.goBack();
  };

  useEffect(() => {
    if (!image) {
      pickPicture();
    }
  }, [image]);

  useEffect(() => {
    if (mutationResult.isSuccess) {
      // Regresar a la pantalla anterior
      navigation.goBack();
    } else if (mutationResult.isError) {
      console.log(
        "Error al actualizar la foto de perfil:",
        mutationResult.error
      );
    }
  }, [mutationResult]);

  return (
    <View style={styles.container}>
      {/* Vista previa */}
      <RoundedProfilePic
        pic={image || profilePicture}
        size={200}
        borderWidth={2}
      />

      {/* Botones de confirmación, de reintento y descarte */}
      {image && <SubmitBtn text={i18n.t("confirm")} onPress={confirmPicture} />}
      <SubmitBtn text={i18n.t("take_another_photo")} onPress={pickPicture} />
      <SubmitBtn text={i18n.t("discard_changes")} onPress={onDiscard} />
    </View>
  );
};

export default PictureSelector;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
