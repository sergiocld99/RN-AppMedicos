import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const SubmitBtn = ({
  onPress,
  text,
  width = "50%",
  backgroundColor = colors.buttonColor,
}) => {
  return (
    <Pressable onPress={onPress} style={{ ...styles.button, width, backgroundColor }}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SubmitBtn;
