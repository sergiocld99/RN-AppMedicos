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
    specialties: 'Specialties',
    reviews: 'Reviews',
    no_reviews: 'No reviews yet',
    loading: 'Loading...',
    query_error: 'An error occurred while fetching data',
    no_data: 'No data available',
    location: 'Location',
    doctors: 'Doctors',
    appointments: 'Appointments',
    map: 'Map',
    profile: 'Profile',
    replace_photo: 'Replace photo',
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
    specialties: 'Especialidades',
    reviews: 'Opiniones',
    no_reviews: 'No hay opiniones disponibles',
    loading: 'Cargando...',
    location: 'Ubicación',
    query_error: 'Ocurrió un error al obtener los datos',
    no_data: 'No hay datos disponibles para mostrar',
    doctors: 'Médicos',
    appointments: 'Turnos',
    map: 'Mapa',
    profile: 'Perfil',
    replace_photo: 'Reemplazar foto',
  },
}

const i18n = new I18n(translations)

// Establecer el idioma por defecto
i18n.locale = getLocales()[0].languageCode ?? 'en'

// Habilitar la traducción de respaldo
i18n.enableFallback = true

export default i18n