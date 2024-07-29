import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import i18n from "../translations/i18n";
import AuthHeader from "../components/AuthHeader";

const Stack = createNativeStackNavigator()

/**
 * 
 * @returns Navegador para las pantallas de autenticación
 */
const AuthStackNavigator = () => {
  // Función para obtener el título de la pantalla según el nombre de la ruta
  const getTitle = (routeName) => {
    switch(routeName){
      case 'Login':
        return i18n.t('login')
      case 'Register':
        return i18n.t('register')
      default:
        return routeName
    }
  }

  return (
    <Stack.Navigator screenOptions={
      ({ route }) => ({
        header: () => <AuthHeader title={getTitle(route.name)} />
      })
    } >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator