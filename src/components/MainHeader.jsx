import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/UserSlice';
import { deleteSession } from '../databases/Local';

// Importación de iconos
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RoundedProfilePic from './RoundedProfilePic';

const MainHeader = ({title}) => {
  const { localId, profilePicture } = useSelector(state => state.auth.value)
  const dispatch = useDispatch()

  // Función de cerrar sesión
  const onLogout = () => {
    // Borrar la sesión del store de Redux
    dispatch(logout())

    // Borrar la sesión de la base de datos local
    deleteSession({localId}).then(() => {
      res => console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <View style={styles.header}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Parte derecha */}
      <View style={styles.rightSide}>
        {/* Foto de perfil */}
        <RoundedProfilePic pic={profilePicture} size={28} />

        {/* Ícono para cerrar sesión */}
        <Pressable onPress={onLogout}>
          <MaterialCommunityIcons name="power" size={28} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightSide: {
    flexDirection: 'row',
    gap: 16
  }
})