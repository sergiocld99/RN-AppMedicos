import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoundedProfilePic = ({pic, size}) => {
  return (
    <View>
      {
        pic ? (
          <Image source={{ uri: pic }} style={{width: size, height: size}} resizeMode='cover' />
        ) : (
          <Image source={require('../../assets/default-pfp.png')} style={{width: size, height: size}} />
        )
      }
    </View>
  )
}

export default RoundedProfilePic

const styles = StyleSheet.create({})