import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
import { getSessions } from '../databases/Local'
import { login } from '../features/UserSlice'
import MainTabsNavigator from './MainTabsNavigator'

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()  

  // Consultar sesión en la carga del Navigator
  useEffect(() => {
    (async() => {
      getSessions().then(res => {
        let userRow = res[0]

        if (userRow) {
          dispatch(login({
            email: userRow.email,
            localId: userRow.local_id,
            token: userRow.token
          }))
        }
      }).catch(err => console.log("No hay sesion guardada"))
    })()
  }, [])

  // Renderizar el navegador principal o el de autenticación 
  // dependiendo si hay un usuario logueado o no
  return (
    <NavigationContainer >
      {user ? (
        <MainTabsNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  )
}

export default Navigator