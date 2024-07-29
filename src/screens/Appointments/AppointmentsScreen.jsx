import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../global/colors'
import { useGetAppointmentsOfUserQuery } from '../../services/doctorListService'
import { useSelector } from 'react-redux'
import AppointmentsSection from '../../components/AppointmentsSection'

/**
 * Pantalla de turnos agendados
 */
const AppointmentsScreen = ({navigation}) => {
  // Obtener el localId del usuario desde el store de Redux
  const { localId } = useSelector((state) => state.auth.value);

  const [appointments, setAppointments] = useState([]);

  // Obtener turnos del usuario
  const { data } = useGetAppointmentsOfUserQuery(localId);

  useEffect(() => {
    if (data) {
      const keys = Object.keys(data);
      const values = Object.values(data);
      const transformedData = keys.map((key, index) => ({ documentId: key, ...values[index] }));
      setAppointments(transformedData);
    }
  }, [data])

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