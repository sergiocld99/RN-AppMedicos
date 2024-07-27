import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedCard from './RoundedCard'

const SingleTextCard = ({text, onPress}) => {
  return (
    <RoundedCard onPress={onPress}>
      <Text style={styles.internalText}>{text}</Text>
    </RoundedCard>
  )
}

export default SingleTextCard

const styles = StyleSheet.create({
  internalText: {
    fontSize: 16
  }
})