import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const AuthHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
})