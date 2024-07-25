import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import InputForm from '../../components/InputForm';
import i18n from '../../translations/i18n';
import SubmitBtn from '../../components/SubmitBtn';
import { styles } from './common';

const LoginScreen = ({navigation}) => {
  // Valores de los campos de login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Mensajes de error
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  
  const handleLogin = () => {
    console.log('Login')
  }

  return (
    <View style={styles.container}>
      <InputForm label={i18n.t('email')} error={errorEmail} onChange={setEmail} />
      <InputForm label={i18n.t('password')} error={errorPassword} isSecure onChange={setPassword} />
      <SubmitBtn onPress={handleLogin} text={i18n.t('login')} />
      <Pressable
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.underlinedLink}>{i18n.t('dontHaveAnAccount')}</Text>  
      </Pressable>  
    </View>
  )
}

export default LoginScreen