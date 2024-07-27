import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedCard from "./RoundedCard";

import { Feather } from "@expo/vector-icons";

const ReviewCard = ({ review }) => {
  return (
    <RoundedCard>
      <View>
        <Text>{review.comentario}</Text>
        <View style={styles.row}>
          <Feather name="star" size={20} color="black" />
          <Text>{review.calificación.toFixed(1)}</Text>
        </View>
      </View>
    </RoundedCard>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 6,
  },
});
