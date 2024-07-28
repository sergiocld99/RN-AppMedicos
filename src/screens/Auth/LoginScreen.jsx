import { View, Text, StyleSheet, Button, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../../components/InputForm';
import i18n from '../../translations/i18n';
import SubmitBtn from '../../components/SubmitBtn';
import { localLogin, styles } from './common';
import { loginSchema } from '../../validations/credentialsSchema';
import { useLoginMutation } from '../../services/authService';
import { useDispatch } from 'react-redux';

const LoginScreen = ({navigation}) => {
  // Valores de los campos de login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Mensajes de error
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  // Hook de login en Firebase
  const [triggerLogin, mutationResult] = useLoginMutation()

  // Hook de despacho de acciones
  const dispatch = useDispatch()

  useEffect(() => {
    if (mutationResult.isSuccess) {
      localLogin({ mutationResult, dispatch });
    } else if (mutationResult.isError) {
      console.log("Error al autenticar:", mutationResult.error);
    }
  }, [mutationResult]);

  // Limpieza de mensajes de error
  const clearErrors = () => {
    setErrorEmail('')
    setErrorPassword('')
  }
  
  const onLogin = () => {
    clearErrors()

    try {
      // Validar todos los datos del formulario
      loginSchema.validateSync(
        { email, password },
        { abortEarly: false }
      );

      // Autenticar en Firebase
      triggerLogin({ email, password, returnSecureToken: true })

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
      <Image source={require('../../../assets/logo.png')} style={styles.image} resizeMode='cover' />
      <InputForm label={i18n.t('email')} error={errorEmail} onChange={setEmail} autoCompleteType='email' />
      <InputForm label={i18n.t('password')} error={errorPassword} isSecure onChange={setPassword} autoCompleteType='password' />
      <SubmitBtn onPress={onLogin} text={i18n.t('login')} />
      <Pressable
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.underlinedLink}>{i18n.t('dontHaveAnAccount')}</Text>  
      </Pressable>  
    </View>
  )
}

export default LoginScreen