import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../translations/i18n";
import AppointmentCard from "./AppointmentCard";

const AppointmentsSection = ({ list = [] }) => {
  
  // Ordenar turnos por fecha y hora
  const sortedList = [...list].sort((a, b) => {
    return a.timestamp.localeCompare(b.timestamp);
  });

  return (
    <>
      <Text style={styles.title}>{i18n.t("next_appointments")}</Text>
      {sortedList.length ? (
        <FlatList
          data={sortedList}
          keyExtractor={(item) => item.documentId }
          renderItem={({ item }) => <AppointmentCard data={item} />}
          style={{ width: "100%" }}
        />
      ) : (
        <Text style={{ textAlign: "center" }}>{i18n.t("no_appointments")}</Text>
      )}
    </>
  );
};

export default AppointmentsSection;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
});
