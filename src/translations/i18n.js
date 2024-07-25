import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

const translations = {
  en: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    dontHaveAnAccount: 'Don\'t have an account? Register here',
  },
  es: {
    login: 'Ingresar',
    email: 'Correo electrónico',
    password: 'Contraseña',
    dontHaveAnAccount: '¿No tienes una cuenta? Regístrate aquí',
  },
}

const i18n = new I18n(translations)

// Establecer el idioma por defecto
i18n.locale = getLocales()[0].languageCode ?? 'en'

// Habilitar la traducción de respaldo
i18n.enableFallback = true

export default i18n