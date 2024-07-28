import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const InputForm = ({
  label,
  error = "",
  isSecure = false,
  autoCompleteType = "",
  placeholder = "",
  onChange = () => {},
  onPress = () => {},
  editable = true,
  fixedValue = ""
}) => {
  // Estado del campo de texto
  const [input, setInput] = useState("");

  // Listener para el cambio de texto
  const onInputChange = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={fixedValue || input}
        onChangeText={onInputChange}
        secureTextEntry={isSecure}
        autoComplete={autoCompleteType}
        placeholder={placeholder}
        editable={editable}
      />

      {/* Mostrar mensaje de error en caso de existir */}
      {error && <Text style={styles.error}>{error}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    width: "80%",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default InputForm;
