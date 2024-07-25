import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

const translations = {
  en: {
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    dontHaveAnAccount: 'Don\'t have an account? Register here',
    alreadyHaveAccount: 'Already have an account? Login here',
  },
  es: {
    login: 'Ingresar',
    register: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    dontHaveAnAccount: '¿No tienes una cuenta? Regístrate aquí',
    alreadyHaveAccount: '¿Ya tienes una cuenta? Inicia sesión aquí',
  },
}

const i18n = new I18n(translations)

// Establecer el idioma por defecto
i18n.locale = getLocales()[0].languageCode ?? 'en'

// Habilitar la traducción de respaldo
i18n.enableFallback = true

export default i18n