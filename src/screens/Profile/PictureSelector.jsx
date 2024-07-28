import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// Importar expo-image-picker
import * as ImagePicker from "expo-image-picker"
import RoundedProfilePic from '../../components/RoundedProfilePic'
import { colors } from '../../global/colors'
import SubmitBtn from '../../components/SubmitBtn'
import i18n from '../../translations/i18n'

const PictureSelector = ({navigation}) => {
  const [image, setImage] = useState(null)
  const { localId } = useSelector(state => state.auth.value)

  // Verificación de permisos
  const verifyPermissions = async() => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    return granted
  }

  // Elección de imagen
  const pickPicture = async() => {
    const permissionGranted = await verifyPermissions()
    if (!permissionGranted) {
      // Regresar a la pantalla anterior
      navigation.goBack()
      return
    }

    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      quality: 0.2
    }).then(selection => {
      if (!selection.canceled){
        // Transformar de base 64 a JPEG
        setImage(`data:image/jpeg;base64,${selection.assets[0].base64}`)
      }
    }).catch(err => {
      // Regresar a la pantalla anterior
      // Puede ocurrir por permiso denegado
      console.log(err)
      navigation.goBack()
    })

  }

  const confirmPicture = () => {
    
  }

  useEffect(() => {
    if (!image){
      pickPicture()
    }
  }, [image])

  return (
    <View style={styles.container}>
      {/* Vista previa */}
      <RoundedProfilePic pic={image} size={200} />

      {/* Botones de confirmación y de reintento */}
      <SubmitBtn text={i18n.t('confirm')} onPress={confirmPicture} />
      <SubmitBtn text={i18n.t('take_another_photo')} onPress={pickPicture} />
    </View>
  )
}

export default PictureSelector

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  }
})