import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../translations/i18n";
import ReviewCard from "./ReviewCard";

const ReviewsSection = ({ list }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("reviews")}</Text>
      {list?.length ? (
        <FlatList
          data={list}
          keyExtractor={(item) => item.comentario}
          renderItem={({ item }) => <ReviewCard review={item} />}
          style={{ width: "100%" }}
        />
      ) : (
        <Text style={{ textAlign: "center" }}>{i18n.t("no_reviews")}</Text>
      )}
    </View>
  );
};

export default ReviewsSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
});
