import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import i18n from '../translations/i18n'

const LoadingManagement = ({isLoading, isError, noData = false}) => {
  return (
    <View>
      {
        isError && <Text style={styles.centeredText}>{i18n.t('query_error')}</Text>
      }
      {
        isLoading ? <Text style={styles.centeredText}>{i18n.t('loading')}</Text> :
        noData ? <Text style={styles.centeredText}>{i18n.t('no_data')}</Text> : null
      }
    </View>
  )
}

export default LoadingManagement

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },
})