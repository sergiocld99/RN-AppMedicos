import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Navigator = () => {
  const { user } = useSelector((state) => state.auth.value)
  console.log("user: ", user)

  return (
    <View>
      <Text>Navigator</Text>
    </View>
  )
}

export default Navigator