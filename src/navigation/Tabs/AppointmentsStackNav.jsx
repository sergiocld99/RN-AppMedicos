import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppointmentsScreen from "../../screens/Main/AppointmentsScreen";
import MainHeader from "../../components/MainHeader";
import i18n from "../../translations/i18n";

const Stack = createNativeStackNavigator();

const AppointmentsStackNav = () => {
  // Función para obtener el título de la pantalla según el nombre de la ruta
  const getTitle = (routeName) => {
    switch(routeName){
      case 'Appointments':
        return i18n.t('appointments')
      default:
        return routeName
    }
  }

  return (
    <Stack.Navigator screenOptions={
      ({ route }) => ({
        header: () => <MainHeader title={getTitle(route.name)} />,
      })
    } >
      <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    </Stack.Navigator>
  );
}

export default AppointmentsStackNav;