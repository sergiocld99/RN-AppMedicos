import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RoundedCard from './RoundedCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeleteAppointmentMutation, useGetDoctorByIdQuery } from '../services/doctorListService';
import { getFullName } from '../screens/Doctors/common';
import SubmitBtn from './SubmitBtn';
import i18n from '../translations/i18n';

const AppointmentCard = ({data}) => {
  // Obtener nombre y apellido del médico
  const { data: doctorInfo } = useGetDoctorByIdQuery(data.doctorId);

  // Hook de borrado del turno en Firebase
  const [triggerDeleteAppointment, deleteResult] = useDeleteAppointmentMutation();

  // Cancelar turno
  const onCancel = () => {
    triggerDeleteAppointment(data.documentId);
  }

  useEffect(() => {
    if (deleteResult.isSuccess) {
      console.log('Turno cancelado exitosamente');
    }
  }, [deleteResult])

  return (
    <RoundedCard>
      <MaterialCommunityIcons name="calendar-clock" size={48} color="black" />
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{data.date} - {data.time}</Text>
        <Text>{getFullName(doctorInfo)}</Text>
        <SubmitBtn text={i18n.t('cancel')} width="80%" backgroundColor='red' onPress={onCancel} />
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