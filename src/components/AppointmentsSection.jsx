import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../translations/i18n";
import ReviewCard from "./ReviewCard";

const AppointmentsSection = ({ list }) => {
  return (
    <>
      <Text style={styles.title}>{i18n.t("next_appointments")}</Text>
      {list?.length ? (
        <FlatList
          data={list}
          keyExtractor={(item) => item.comentario}
          renderItem={({ item }) => <ReviewCard review={item} />}
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
