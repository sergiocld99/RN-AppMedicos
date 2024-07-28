import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetSpecialtiesQuery } from "../../services/doctorListService";
import { colors } from "../../global/colors";
import SingleTextCard from "../../components/SingleTextCard";
import { setSpecialtySelected } from "../../features/DoctorsSlice";
import i18n from "../../translations/i18n";
import LoadingManagement from "../../components/LoadingManagement";

const Specialties = ({ navigation }) => {
  const [specialties, setSpecialties] = useState([]);
  const [noData, setNoData] = useState(false);

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetSpecialtiesQuery();

  useEffect(() => {
    if (data){
      if (data.length === 0) {
        setNoData(true);
      } else {
        const sortedByName = [...data].sort((a, b) => a.localeCompare(b));
        setSpecialties(sortedByName);
      }
    }
  }, [data])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('specialties')}</Text>
      <LoadingManagement isLoading={isLoading} isError={isError} noData={noData} />
      <FlatList data={specialties} keyExtractor={item => item} renderItem={
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
