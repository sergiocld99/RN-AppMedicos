import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DoctorsOfSpeciality = ({navigation, route}) => {
  const { specialty } = route.params;
  
  return (
    <View>
      <Text>{specialty}</Text>
    </View>
  )
}

export default DoctorsOfSpeciality

const styles = StyleSheet.create({})