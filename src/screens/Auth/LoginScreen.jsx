import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import InputForm from '../../components/InputForm';
import i18n from '../../translations/i18n';
import SubmitBtn from '../../components/SubmitBtn';
import { styles } from './common';
import { loginSchema } from '../../validations/credentialsSchema';

const LoginScreen = ({navigation}) => {
  // Valores de los campos de login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Mensajes de error
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  // Limpieza de mensajes de error
  const clearErrors = () => {
    setErrorEmail('')
    setErrorPassword('')
  }
  
  const handleLogin = () => {
    clearErrors()

    try {
      // Validar todos los datos del formulario
      loginSchema.validateSync(
        { email, password },
        { abortEarly: false }
      );

      console.log('Login exitoso')
    } catch (error) {
      // Mostrar cada mensaje de error en el campo correspondiente
      if (error.inner) for (let i = 0; i < error.inner.length; i++) {
        let path = error.inner[i].path;
        let msg = error.inner[i].message;

        switch (path) {
          case "email":
            setErrorEmail(msg);
            break;
          case "password":
            setErrorPassword(msg);
            break;
        }
      } 
    }
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