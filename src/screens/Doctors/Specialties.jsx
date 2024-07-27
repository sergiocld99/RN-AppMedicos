import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useGetSpecialtiesQuery } from "../../services/doctorListService";
import { colors } from "../../global/colors";
import SingleTextCard from "../../components/SingleTextCard";
import { setSpecialtySelected } from "../../features/DoctorsSlice";
import i18n from "../../translations/i18n";

const Specialties = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetSpecialtiesQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('specialties')}</Text>
      <FlatList data={data} keyExtractor={item => item} renderItem={
        ({ item }) => (
          <SingleTextCard text={item} onPress={() => {
            dispatch(setSpecialtySelected(item));
            navigation.navigate("DoctorsOfSpecialty"); 
          }} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center"
  }
});
