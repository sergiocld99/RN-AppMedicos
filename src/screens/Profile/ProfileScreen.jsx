import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SubmitBtn from '../../components/SubmitBtn'
import i18n from '../../translations/i18n'
import { colors } from '../../global/colors'
import RoundedProfilePic from '../../components/RoundedProfilePic'

/**
 * Pantalla de perfil de usuario
 */
const ProfileScreen = ({navigation}) => {
  const pic = useSelector(state => state.auth.value.profilePicture)

  return (
    <View style={styles.container}>
      {/* Se muestra foto de perfil o una imagen por defecto si aún no existe */}
      <RoundedProfilePic pic={pic} size={200} />

      {/* Botón para reemplazo de foto */}
      <SubmitBtn text={i18n.t('replace_photo')} onPress={() => navigation.navigate('ProfilePicSelector')} />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    gap: 20,
  }
})
