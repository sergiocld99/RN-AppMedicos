import { StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../translations/i18n";

// Importación de íconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoadingManagement = ({ isLoading, isError, noData = false }) => {
  return (
    <View style={styles.mainContainer}>
      {isError && (
        <Text style={styles.centeredText}>{i18n.t("query_error")}</Text>
      )}
      {isLoading ? (
        <Text style={styles.centeredText}>{i18n.t("loading")}</Text>
      ) : noData ? (
        <View style={styles.noDataContent}>
          <MaterialCommunityIcons name="emoticon-sad-outline" size={72} color="black" />
          <Text style={styles.centeredText}>{i18n.t("no_data")}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default LoadingManagement;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    textAlign: "center",
  },
  noDataContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
