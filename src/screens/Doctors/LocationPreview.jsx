import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import i18n from '../../translations/i18n';
import { useSelector } from 'react-redux';
import MapPreview from '../../components/MapPreview';

const LocationPreview = ({navigation}) => {
  // Obtener latitud y longitud del state
  const { locationSelected } = useSelector((state) => state.doctors.value);

  return (
    <View style={styles.container}>
      <MapPreview location={locationSelected} />
    </View>
  )
}

export default LocationPreview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})