import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import InputForm from '../../components/InputForm';
import i18n from '../../translations/i18n';
import SubmitBtn from '../../components/SubmitBtn';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    console.log('Login')
  }

  return (
    <View style={styles.container}>
      <InputForm label={i18n.t('email')} onChange={setEmail} />
      <InputForm label={i18n.t('password')} isSecure onChange={setPassword} />
      <SubmitBtn onPress={handleLogin} text={i18n.t('login')} />
      <Pressable
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.underlinedLink}>{i18n.t('dontHaveAnAccount')}</Text>  
      </Pressable>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  underlinedLink: {
    marginTop: 16,
    textDecorationLine: 'underline',
  }
});

export default LoginScreen