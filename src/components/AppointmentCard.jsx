import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedCard from './RoundedCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useGetDoctorByIdQuery } from '../services/doctorListService';
import { getFullName } from '../screens/Doctors/common';

const AppointmentCard = ({data}) => {
  // Obtener nombre y apellido del médico
  const { data: doctorInfo } = useGetDoctorByIdQuery(data.doctorId);

  return (
    <RoundedCard>
      <MaterialCommunityIcons name="calendar-clock" size={48} color="black" />
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{data.date} - {data.time}</Text>
        <Text>{getFullName(doctorInfo)}</Text>
      </View>
    </RoundedCard>
  )
}

export default AppointmentCard

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "column",
    gap: 8
  },
  date: {
    fontSize: 16,
    fontWeight: "bold"
  },
})