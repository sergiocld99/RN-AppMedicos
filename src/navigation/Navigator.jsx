import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value)
  console.log("user: ", user)

  return (
    <NavigationContainer>
      {user ? (
        <View>
          <Text>Logged In</Text>
        </View>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  )
}

export default Navigator