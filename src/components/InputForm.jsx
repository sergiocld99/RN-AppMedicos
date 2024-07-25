import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const InputForm = ({label, error = '', isSecure = false, onChange}) => {
  // Estado del campo de texto
  const [input, setInput] = useState('')

  // Listener para el cambio de texto
  const onInputChange = (text) => {
    setInput(text)
    onChange(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={input} onChangeText={onInputChange} secureTextEntry={isSecure} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    width: '80%',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
})

export default InputForm