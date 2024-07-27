import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useGetSpecialtiesQuery } from "../../services/doctorListService";
import { colors } from "../../global/colors";

const Specialties = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetSpecialtiesQuery();

  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={item => item} renderItem={
        ({ item }) => (
          <Text>{item}</Text>
        )
      } />
    </View>
  );
};

export default Specialties;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background
  },
});
