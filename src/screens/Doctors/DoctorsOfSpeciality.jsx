import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../global/colors';
import { useGetDoctorsBySpecialtyQuery } from '../../services/doctorListService';
import DoctorCard from '../../components/DoctorCard';
import { useDispatch, useSelector } from 'react-redux';
import { setDoctorIdSelected } from '../../features/DoctorsSlice';
import LoadingManagement from '../../components/LoadingManagement';
import InternalHeader from '../../components/InternalHeader';

const DoctorsOfSpeciality = ({navigation}) => {
  const specialty = useSelector(state => state.doctors.value.specialtySelected);

  // Estado para almacenar los doctores
  const [doctors, setDoctors] = useState([]);
  const [noData, setNoData] = useState(false);
  
  const dispatch = useDispatch();

  // Obtención de doctores de la especialidad seleccionada
  const {data, isLoading, isError} = useGetDoctorsBySpecialtyQuery(specialty);

  // Ordenar doctores por apellido al cargar los datos
  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        setNoData(true);
      } else {
        const sortedBySurname = [...data].sort((a, b) => (a.apellido + a.nombre).localeCompare(b.apellido + b.nombre));
        setDoctors(sortedBySurname);
      }
    }
  }, [data])

  return (
    <View style={styles.container}>
      <InternalHeader title={specialty} navigation={navigation} />
      <LoadingManagement isLoading={isLoading} isError={isError} noData={noData} />
      <FlatList data={doctors} keyExtractor={item => item.id} renderItem={
        ({ item }) => (
          <DoctorCard doctor={item} onPress={() => {
            dispatch(setDoctorIdSelected(item.id));
            navigation.navigate("DoctorDetail", { specialty: item.especialidad }); 
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
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center"
  },
  
})