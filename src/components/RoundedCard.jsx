import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoundedCard = ({children, onPress = () => {}}) => {
  return (
    <Pressable style={styles.roundedCard} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export default RoundedCard

const styles = StyleSheet.create({
  roundedCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    width: "90%"
  }
})