import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'
import i18n from '../../translations/i18n'
import { useGetAppointmentsQuery } from '../../services/doctorListService'
import { useSelector } from 'react-redux'
import AppointmentsSection from '../../components/AppointmentsSection'

/**
 * Pantalla de turnos agendados
 */
const AppointmentsScreen = ({navigation}) => {
  // Obtener el localId del usuario desde el store de Redux
  const { localId } = useSelector((state) => state.auth.value);

  // Obtener turnos del usuario
  const { data: appointments, isLoading, isError } = useGetAppointmentsQuery({localId});

  return (
    <View style={styles.container}>
      <AppointmentsSection list={appointments} />
    </View>
  )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center"
  }
})