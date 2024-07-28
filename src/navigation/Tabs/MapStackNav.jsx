import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "../../screens/Main/MapScreen";
import i18n from "../../translations/i18n";
import MainHeader from "../../components/MainHeader";

const Stack = createNativeStackNavigator();

const MapStackNav = () => {
  // Función para obtener el título de la pantalla según el nombre de la ruta
  const getTitle = (routeName) => {
    switch(routeName){
      case 'Map':
        return i18n.t('map')
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
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MapStackNav;