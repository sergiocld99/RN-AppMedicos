import { StyleSheet, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react'

const DoctorCard = ({doctor, onPress}) => {
  const rating = doctor.reviews.reduce((acc, review) => acc + review.calificación, 0) / doctor.reviews.length;
  
  return (
    <View style={styles.roundedCard}>
      <Fontisto name={doctor.sexo === 'M' ? "male" : "female"} size={48} color="black" />
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.surname}>{doctor.apellido},</Text>
          <Text style={styles.name}>{doctor.nombre}</Text>
        </View>
        <View style={styles.row}>
          <Feather name="star" size={20} color="black" />
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
  roundedCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 16
  },
  summary: {
    gap: 4
  },
  row: {
    flexDirection: "row",
    gap: 6
  },
  surname: {
    fontSize: 16,
    fontWeight: "bold"
  },
  name: {
    fontSize: 16
  }
})