import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import MapPreview from '../../components/MapPreview';
import { useGetDoctorByIdQuery } from '../../services/doctorListService';
import InternalHeader from '../../components/InternalHeader';
import { getFullName } from './common';

const LocationPreview = ({navigation}) => {
  // Obtener latitud y longitud del state
  const { doctorIdSelected } = useSelector((state) => state.doctors.value);

  // Obtener detalles del doctor por ID
  const { data, isLoading, isError } = useGetDoctorByIdQuery(doctorIdSelected);

  return (
    <View style={styles.container}>
      <InternalHeader title={getFullName(data)} navigation={navigation} />
      { data && <MapPreview location={data.ubicación} /> }
    </View>
  )
}

export default LocationPreview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 16,
  },
})