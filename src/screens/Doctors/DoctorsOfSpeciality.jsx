import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../global/colors';
import { useGetDoctorsBySpecialtyQuery } from '../../services/doctorListService';
import SingleTextCard from '../../components/SingleTextCard';
import DoctorCard from '../../components/DoctorCard';
import { useSelector } from 'react-redux';

const DoctorsOfSpeciality = ({navigation}) => {
  const specialty = useSelector(state => state.doctors.value.specialtySelected);
  const [doctors, setDoctors] = useState([]);
  
  // Obtención de doctores de la especialidad seleccionada
  const {data, isLoading, isError} = useGetDoctorsBySpecialtyQuery(specialty);

  // Ordenar doctores por apellido al cargar los datos
  useEffect(() => {
    if (data) {
      const sortedBySurname = [...data].sort((a, b) => a.apellido.localeCompare(b.apellido));
      setDoctors(sortedBySurname);
    }
  }, [data])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{specialty}</Text>
      <FlatList data={doctors} keyExtractor={item => item.id} renderItem={
        ({ item }) => (
          <DoctorCard doctor={item} onPress={() => {
            navigation.navigate("DoctorDetail", { doctor: item.id }); 
          }} />
        )
      } />
    </View>
  )
}

export default DoctorsOfSpeciality

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
})