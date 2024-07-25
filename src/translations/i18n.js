import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import { PASSWORD_MIN_LENGTH } from '../constants'

const translations = {
  en: {
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    dontHaveAnAccount: 'Don\'t have an account? Register here',
    alreadyHaveAccount: 'Already have an account? Login here',
    passwordsMustMatch: 'Passwords must match',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    confirmPasswordRequired: 'Confirm password is required',
    emailInvalid: 'Invalid email',
    passwordMinRequired: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
  },
  es: {
    login: 'Ingresar',
    register: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    dontHaveAnAccount: '¿No tienes una cuenta? Regístrate aquí',
    alreadyHaveAccount: '¿Ya tienes una cuenta? Inicia sesión aquí',
    passwordsMustMatch: 'Las contraseñas deben coincidir',
    emailRequired: 'El correo electrónico es obligatorio',
    passwordRequired: 'La contraseña es obligatoria',
    confirmPasswordRequired: 'La confirmación de la contraseña es obligatoria',
    emailInvalid: 'Correo electrónico inválido',
    passwordMinRequired: `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres`,
  },
}

const i18n = new I18n(translations)

// Establecer el idioma por defecto
i18n.locale = getLocales()[0].languageCode ?? 'en'

// Habilitar la traducción de respaldo
i18n.enableFallback = true

export default i18n