import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

// icons
import { AntDesign } from "@expo/vector-icons";

/**
 * Componente que muestra el encabezado de una pantalla interna.
 */
const InternalHeader = ({ navigation, title }) => {
  return (
    <View style={styles.internalHeader}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default InternalHeader;

const styles = StyleSheet.create({
  internalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: "90%",
  },
});
