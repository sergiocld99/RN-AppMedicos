import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const SubmitBtn = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SubmitBtn