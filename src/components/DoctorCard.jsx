import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import RoundedCard from './RoundedCard';

const DoctorCard = ({doctor, onPress}) => {
  const rating = doctor.reviews.reduce((acc, review) => acc + review.calificación, 0) / doctor.reviews.length;
  
  return (
    <RoundedCard onPress={onPress}>
      <Fontisto name={doctor.sexo === 'M' ? "male" : "female"} size={48} color="black" />
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.surname}>{doctor.apellido},</Text>
          <Text style={styles.name}>{doctor.nombre}</Text>
        </View>
        <View style={styles.row}>
          <Feather name="star" size={20} color="black" />
          <Text>{rating.toFixed(1)}</Text>
        </View>
      </View>
    </RoundedCard>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
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