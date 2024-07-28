import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../translations/i18n";
import ReviewCard from "./ReviewCard";

const ReviewsSection = ({ reviews }) => {
  return (
    <>
      <Text style={styles.title}>{i18n.t("reviews")}</Text>
      {reviews.length ? (
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.comentario}
          renderItem={({ item }) => <ReviewCard review={item} />}
        />
      ) : (
        <Text style={{ textAlign: "center" }}>{i18n.t("no_reviews")}</Text>
      )}
    </>
  );
};

export default ReviewsSection;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
});
