import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { staticMapsApiKey } from '../api/staticMaps'

const MapPreview = ({location}) => {
  const { latitud, longitud } = location;
  const zoom = 15;

  // url
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitud},${longitud}&zoom=${zoom}&size=300x300&maptype=roadmap&markers=color:red%7Clabel:Me%7C${latitud},${longitud}&key=${staticMapsApiKey}`

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250,
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 20
  }
})

export default MapPreview